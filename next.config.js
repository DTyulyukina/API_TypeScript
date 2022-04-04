// @ts-check
const path = require("path");

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.resolve.fallback = {fs: false};
    return config;
  },
};

module.exports = nextConfig;
