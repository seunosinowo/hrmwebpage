/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add allowed image domains here if needed
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    // optimizeCss: true, // Disabled to avoid critters dependency issue
  },
};

module.exports = nextConfig;
