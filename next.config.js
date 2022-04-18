/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // entry: './icons/index.js',
  // module: {
  //   rules: [
  //     //...
  //     {
  //       test: /\.svg$/,
  //       use: ['@svgr/webpack'],
  //     },
  //   ],
  // },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: { and: [/\.(js|ts|md)x?$/] },
        use: ["@svgr/webpack", "url-loader"],
      }
    );

    return config;
  },
}



module.exports = nextConfig
