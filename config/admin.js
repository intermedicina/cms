module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e422d3e429def5bca9ad3dd376fa3960'),
  },
});
