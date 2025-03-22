// module.exports = () => ({});

module.exports = ({ env }) => ({
    upload: {
        config: {
            providerOptions: {
                baseUrl: "https://content.stitchflow.com", // ✅ Ensure this is correct
                localServer: {
                    url: env("PUBLIC_URL", "https://content.stitchflow.com"), // ✅ Make sure this matches
                },
            },
        },
    },
});