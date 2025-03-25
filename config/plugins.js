// module.exports = () => ({});

module.exports = ({ env }) => ({
    upload: {
        config: {
            providerOptions: {
                baseUrl: env("https://content.stitchflow.com", "https://content.stitchflow.com"),
                localServer: {
                    url: env("https://content.stitchflow.com", "https://content.stitchflow.com"),
                },
            },
        },
    },
});  