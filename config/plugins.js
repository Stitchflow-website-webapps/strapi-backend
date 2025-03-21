// module.exports = () => ({});

module.exports = ({ env }) => ({
    upload: {
        config: {
            providerOptions: {
                baseUrl: "https://content.stitchflow.com",
            },
        },
    },
});