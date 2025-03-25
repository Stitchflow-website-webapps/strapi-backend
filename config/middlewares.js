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
                "https://www.stitchflow.com",
                "https://website-euq1zdktb-websitestitchflowios-projects.vercel.app",
            ], // Add your frontend domain
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        },
    },
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'connect-src': ["'self'", 'https:'],
                    'img-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'market-assets.strapi.io',
                        "https://stitchflow.b-cdn.net"
                    ],
                    'media-src': [
                        "'self'",
                        'data:',
                        'blob:',
                        'market-assets.strapi.io',
                        "https://stitchflow.b-cdn.net"
                    ],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
    "strapi::poweredBy",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
];
