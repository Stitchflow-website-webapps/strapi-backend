module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        baseUrl: "https://content.stitchflow.com",
        localServer: {
          url: env('PUBLIC_URL', 'https://content.stitchflow.com'),
        },
      },
    },
  },
});