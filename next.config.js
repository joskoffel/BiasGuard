/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode and keep App Router disabled for compatibility with pages directory
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  // Allow importing SVGs as React components
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;