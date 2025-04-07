// "use strict";
// require("dotenv").config();
// const bootstrap = async ({strapi}) => {
//     const submitToIndexNow = async (urls) => {
//         if (!Array.isArray(urls)) {
//             urls = [urls];
//         }

//         const key = process.env.INDEXNOW_KEY || "735044fce36945f984f424d9bb5d28b2";
//         const host = "www.stitchflow.com";
//         if (!key) {
//             strapi.log.error("❌ INDEXNOW_KEY is missing in environment variables.");
//             return false;
//         }

//         const batchSize = 100;
//         let allSuccess = true;
//         for (let i = 0; i < urls.length; i += batchSize) {
//             const batch = urls.slice(i, i + batchSize);

//             try {
//                 const response = await fetch("https://www.bing.com/indexnow", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({host, key, urlList: batch}),
//                 });
//                 const responseBody = await response.text();
//                 if (response.ok) {
//                     strapi.log.info(`✅ IndexNow submitted URL: ${urls}`);
//                 } else {
//                     strapi.log.error(
//                         `❌ IndexNow submission failed. Status: ${response.status}. Response: ${responseBody}`
//                     );
//                     allSuccess = false;
//                 }
//                 return response.ok;
//             } catch (error) {
//                 strapi.log.error("❌ IndexNow submission failed:", error);
//                 allSuccess = false;
//             }
//         }
//         return allSuccess;
//     };

//     // Monitor content types (adjust as needed)
//     const contentTypes = [
//         "api::authors.authors",
//         "api::blogs.blogs",
//         "api::newsletter-submissions.newsletter-submissions",
//         "api::user.user",
//         "api::article.article",
//         "api::page.page",
//         "api::about-page.about-page",
//         "api::blog-home.blog-home",
//         "api::demo-request-form.demo-request-form",
//         "api::global-footer.global-footer",
//         "api::integrations.integrations",
//         "api::navigation-menu.navigation-menu",
//         "api::newsletter-form.newsletter-form",
//         "api::platform.platform",
//         "api::privacy-policy.privacy-policy",
//         "api::terms-of-service.terms-of-service",
//         "api::security.security",
//         "api::website-homepage.website-homepage",
//     ];

//     contentTypes.forEach((contentType) => {
//         strapi.db.lifecycles.subscribe({
//             model: contentType,

//             async afterCreate(event) {
//                 const {result} = event;
//                 let slug = result.urlSlug || result.slug;
//                 const slugMap = {
//                     "api::about-page.about-page": "about",
//                     "api::platform.platform": "platform",
//                     "api::integrations.integrations": "integrations",
//                     "api::demo-request-form.demo-request-form": "schedule-a-demo",
//                     "api::security.security": "security",
//                     "api::terms-of-service.terms-of-service": "terms-of-service",
//                     "api::privacy-policy.privacy-policy": "privacy",
//                     "api::website-homepage.website-homepage": "",
//                 };

//                 // Apply predefined slug if applicable
//                 if (slugMap[contentType]) {
//                     slug = slugMap[contentType];
//                 }

//                 if (!slug && result.heading) {
//                     slug = result.heading
//                     .toLowerCase()
//                     .trim()
//                     .replace(/\s+/g, "-")
//                     .replace(/[^a-z0-9-]/g, "");
//                 }
//                 strapi.log.info(`🔍 [DEBUG] Determined Slug for ${contentType}: ${slug}`);
//                 if (!slug) {
//                     strapi.log.warn(`⚠️ Skipping IndexNow submission: No valid slug for ${contentType}`);
//                     return;
//                 }
//                 // const slug = result.slug ? result.slug : result.title?.toLowerCase().replace(/\s+/g, "-") || result.id;
//                 const url = `https://www.stitchflow.com/${slug}`;
//                 // if (slug && slug !== "unknown") {
//                 await submitToIndexNow(url);
//                 // } else {
//                 //     strapi.log.warn(`⚠️ Skipping IndexNow submission: Missing slug for ${contentType}`);
//                 // }
//             },

//             async afterUpdate(event) {
//                 const {result} = event;
//                 let slug = result.urlSlug || result.slug;
//                 const slugMap = {
//                     "api::about-page.about-page": "about",
//                     "api::platform.platform": "platform",
//                     "api::integrations.integrations": "integrations",
//                     "api::demo-request-form.demo-request-form": "schedule-a-demo",
//                     "api::security.security": "security",
//                     "api::terms-of-service.terms-of-service": "terms-of-service",
//                     "api::privacy-policy.privacy-policy": "privacy",
//                     "api::website-homepage.website-homepage": "",
//                 };

//                 if (slugMap[contentType]) {
//                     slug = slugMap[contentType];
//                 }

//                 if (!slug && result.heading) {
//                     slug = result.heading
//                     .toLowerCase()
//                     .trim()
//                     .replace(/\s+/g, "-")
//                     .replace(/[^a-z0-9-]/g, "");
//                 }
//                 strapi.log.info(`🔍 [DEBUG] Determined Slug for ${contentType}: ${slug}`);
//                 if (!slug) {
//                     strapi.log.warn(`⚠️ Skipping IndexNow submission: No valid slug for ${contentType}`);
//                     return;
//                 }
//                 // const slug = result.slug ? result.slug : result.title?.toLowerCase().replace(/\s+/g, "-") || result.id;
//                 const url = `https://www.stitchflow.com/${slug}`;
//                 // if (slug && slug !== "unknown") {
//                 await submitToIndexNow(url);
//                 // } else {
//                 //     strapi.log.warn(`⚠️ Skipping IndexNow submission: Missing slug for ${contentType}`);
//                 // }
//             },
//         });
//     });

//     strapi.log.info("✅ IndexNow lifecycle hooks initialized");
// };
// module.exports = {
//     /**
//      * An asynchronous register function that runs before
//      * your application is initialized.
//      *
//      * This gives you an opportunity to extend code.
//      */
//     register(/*{ strapi }*/) {},

//     /**
//      * An asynchronous bootstrap function that runs before
//      * your application gets started.
//      *
//      * This gives you an opportunity to set up your data model,
//      * run jobs, or perform some special logic.
//      */
//     bootstrap,
// };
"use strict";
require("dotenv").config();

const bootstrap = async ({strapi}) => {
    const submitToIndexNow = async (urls) => {
        if (!Array.isArray(urls)) {
            urls = [urls];
        }

        const key = process.env.INDEXNOW_KEY || "";
        const host = "www.stitchflow.com";
        if (!key) {
            strapi.log.error("❌ INDEXNOW_KEY is missing in environment variables.");
            return false;
        }

        const batchSize = 100;
        let allSuccess = true;
        for (let i = 0; i < urls.length; i += batchSize) {
            const batch = urls.slice(i, i + batchSize);

            try {
                const response = await fetch("https://www.bing.com/indexnow", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({host, key, urlList: batch}),
                });
                const responseBody = await response.text();
                if (response.ok) {
                    strapi.log.info(`✅ IndexNow submitted URL: ${batch}`);
                } else {
                    strapi.log.error(
                        `❌ IndexNow submission failed. Status: ${response.status}. Response: ${responseBody}`
                    );
                    allSuccess = false;
                }
            } catch (error) {
                strapi.log.error("❌ IndexNow submission failed:", error);
                allSuccess = false;
            }
        }
        return allSuccess;
    };

    const determineSlug = (result, contentType) => {
        let slug = result.urlSlug || result.slug;

        const slugMap = {
            "api::about-page.about-page": "about",
            "api::platform.platform": "platform",
            "api::integrations.integrations": "integrations",
            "api::demo-request-form.demo-request-form": "schedule-a-demo",
            "api::security.security": "security",
            "api::terms-of-service.terms-of-service": "terms-of-service",
            "api::privacy-policy.privacy-policy": "privacy",
            "api::website-homepage.website-homepage": "",
        };

        if (!slug && slugMap[contentType]) {
            slug = slugMap[contentType];
            strapi.log.info(`📌 Using predefined slug for ${contentType}: ${slug}`);
        }

        if (!slug) {
            slug = result.title || result.heading || result.name;
            if (slug) {
                slug = slug
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");
            }
        }

        let prefix = "";
        if (contentType === "api::blogs.blogs") {
            prefix = "blog/";
        }
        const fullSlug = `${prefix}${slug}`;
        strapi.log.info(`🔍 Final Slug for ${contentType}: ${fullSlug}`);
        return fullSlug;
    };

    const contentTypes = [
        "api::authors.authors",
        "api::blogs.blogs",
        "api::newsletter-submissions.newsletter-submissions",
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
        "api::privacy-policy.privacy-policy",
        "api::terms-of-service.terms-of-service",
        "api::security.security",
        "api::website-homepage.website-homepage",
    ];

    contentTypes.forEach((contentType) => {
        strapi.db.lifecycles.subscribe({
            model: contentType,

            async afterCreate(event) {
                const {result} = event;
                const slug = determineSlug(result, contentType);

                strapi.log.info(`🔍 [DEBUG] Determined Slug for ${contentType}: ${slug}`);
                if (!slug) {
                    strapi.log.warn(`⚠️ Skipping IndexNow submission: No valid slug for ${contentType}`);
                    return;
                }

                const url = `https://www.stitchflow.com/${slug}`;
                await submitToIndexNow(url);
            },

            async afterUpdate(event) {
                const {result} = event;
                const slug = determineSlug(result, contentType);

                if (!slug) {
                    strapi.log.warn(`⚠️ Skipping IndexNow submission: No valid slug for ${contentType}`);
                    return;
                }

                const url = `https://www.stitchflow.com/${slug}`;
                strapi.log.info(`📌 Submitting URL to IndexNow: ${url}`);

                await submitToIndexNow(url);
            },
        });
    });

    strapi.log.info("✅ IndexNow lifecycle hooks initialized");
};

module.exports = {
    register() {},
    bootstrap,
};
