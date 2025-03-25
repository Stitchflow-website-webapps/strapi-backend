// module.exports = () => ({});

module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: '@nexide/strapi-provider-bunny',
            providerOptions: {
                api_key: '976abdfb-292b-40fc-bce6d6536ddc-9ec8-4f03',
                storage_zone: 'stitchflow-storage',
                pull_zone: 'stitchflow.b-cdn.net',
                hostname: 'sg.storage.bunnycdn.com',
                upload_path: 'uploads',
            },
        },
    },
});