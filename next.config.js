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
  images: {
    domains: [
      'images.unsplash.com',
      'i.pinimg.com',
      'cdn2.steamgriddb.com',
      'whatifgaming.com',
      'www.jeuxvideo-live.com',
      'image.api.playstation.com',
      't.ctcdn.com.br',
      'gmedia.playstation.com',
      'e.snmc.io',
      'www.trustedreviews.com',
    ],
  },
});
