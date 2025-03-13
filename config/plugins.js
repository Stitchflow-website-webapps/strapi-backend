module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          url: env('PUBLIC_URL', 'https://content.stitchflow.com'),
        },
      },
    },
  },
});
