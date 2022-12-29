/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiUrl: "http://localhost:2000",
    GOOGLE_RECAPTCHA_SITE_KEY:"6LeYocAZAAAAAJHssMd0OslkAv0EswCKIP8jhkA-",
    GOOGLE_RECAPTCHA_SECRET:"6LeYocAZAAAAAOgtkOfeG0kcebVfXpOFEIOV76My",
  }
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
