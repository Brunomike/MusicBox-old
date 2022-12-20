/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiUrl: "http://localhost:8080",
    GOOGLE_RECAPTCHA_SITE_KEY:"6Le8qJIjAAAAAFJp_uMeoAZNS-YQubvSGxgoyZka",
    GOOGLE_RECAPTCHA_SECRET:"6Le8qJIjAAAAAJZSYB_L6AUU9lx379Mx3fAtjk-G",

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
