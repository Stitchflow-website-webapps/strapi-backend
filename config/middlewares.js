module.exports = [
    "strapi::logger",
    "strapi::errors",
    "strapi::security",
    {
        name: "strapi::cors",
        config: {
            enabled: true,
            headers: "*",
            origin: [
                "http://localhost:3000",
                "https://website-steel-xi-84.vercel.app",
                "https://www.stitchflow.com/",
                "https://website-cyaa7ixkm-websitestitchflowios-projects.vercel.app",
            ], // Add your frontend domain
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        },
    },
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
