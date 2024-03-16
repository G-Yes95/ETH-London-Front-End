/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.extensions.push(".js", ".jsx");

    return config;
  },
};

module.exports = nextConfig;
