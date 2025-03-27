"use strict";
require("dotenv").config();
const bootstrap = async ({strapi}) => {
    const submitToIndexNow = async (urls) => {
        if (!Array.isArray(urls)) {
            urls = [urls];
        }

        const key = process.env.INDEXNOW_KEY || "";
        if (!key) {
            strapi.log.error("❌ INDEXNOW_KEY is missing in environment variables.");
            return false;
        }
        const host = "www.stitchflow.com";

        try {
            const response = await fetch("https://www.bing.com/indexnow", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({host, key, urlList: urls}),
            });
            if (response.ok) {
                strapi.log.info(`✅ IndexNow submitted URL: ${urls}`);
            } else {
                strapi.log.error(`❌ IndexNow submission failed. Status: ${response.status}`);
            }
            return response.ok;
        } catch (error) {
            strapi.log.error("❌ IndexNow submission failed:", error);
            return false;
        }
    };

    // Monitor content types (adjust as needed)
    const contentTypes = [
        "api::authors.authors",
        "api::blogs.blogs",
        "api::newsletter-submissions.newsletter-submissions",
        "api::terms-or-policy.terms-or-policy",
        "api::user.user",
        "api::article.article",
        "api::page.page",
        "api::about-page.about-page",
        "api::blog-home.blog-home",
        "api::demo-request-form.demo-request-form",
        "api::global-footer.global-footer",
        "api::integrations.integrations",
        "api::navigation-menu.navigation-menu",
        "api::newsletter-form.newsletter-form",
        "api::platform.platform",
        "api::security.security",
        "api::website-homepage.website-homepage",
    ];

    contentTypes.forEach((contentType) => {
        strapi.db.lifecycles.subscribe({
            model: contentType,

            async afterCreate(event) {
                const {result} = event;
                let slug = result.urlSlug || result.slug;
                if (!slug && result.heading) {
                    slug = result.heading
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "");
                }

                // const slug = result.slug ? result.slug : result.title?.toLowerCase().replace(/\s+/g, "-") || result.id;
                const url = `https://www.stitchflow.com/${slug}`;
                await submitToIndexNow(url);
            },

            async afterUpdate(event) {
                const {result} = event;
                let slug = result.urlSlug || result.slug;
                if (!slug && result.heading) {
                    slug = result.heading
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^a-z0-9-]/g, "");
                }

                // const slug = result.slug ? result.slug : result.title?.toLowerCase().replace(/\s+/g, "-") || result.id;
                const url = `https://www.stitchflow.com/${slug}`;
                await submitToIndexNow(url);
            },
        });
    });

    strapi.log.info("✅ IndexNow lifecycle hooks initialized");
};
module.exports = {
    /**
     * An asynchronous register function that runs before
     * your application is initialized.
     *
     * This gives you an opportunity to extend code.
     */
    register(/*{ strapi }*/) {},

    /**
     * An asynchronous bootstrap function that runs before
     * your application gets started.
     *
     * This gives you an opportunity to set up your data model,
     * run jobs, or perform some special logic.
     */
    bootstrap,
};
