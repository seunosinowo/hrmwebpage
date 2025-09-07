/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['framer-motion'],
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    esmExternals: true,
    // optimizeCss: true, // Disabled to avoid critters dependency issue
  },
};

module.exports = nextConfig;
