module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
        }
    },
    wysiwyg: {
        enabled: true,
        resolve: "./src/plugins/wysiwyg", // path to plugin folder
      },
    // ...
});