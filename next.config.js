let secrets;
if (process.env.NODE_ENV === "development") {
  secrets = require('./secrets.json');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: process.env.NODE_ENV === "development" ? JSON.parse(secrets) : {}
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;

  }
};

module.exports = nextConfig
