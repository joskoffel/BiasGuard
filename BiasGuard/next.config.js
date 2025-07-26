/**
 * Top‑level Next.js configuration for the monorepo. At present only the
 * dashboard app consumes this configuration. If you need to customise
 * behaviour per‑app you can add an app‑specific `next.config.js` within
 * that package. See https://nextjs.org/docs/api-reference/next.config.js
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Prevent Next.js from optimising external images by default. This
  // simplifies deployment to Vercel and avoids warnings when using the
  // dashboard in environments where image domains are not whitelisted.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;