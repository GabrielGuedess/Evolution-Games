// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !(process.env.NODE_ENV === 'production'),
});

module.exports = withPWA({
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
});
