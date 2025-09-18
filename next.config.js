/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['framer-motion'],
  output: 'export',
  trailingSlash: true,
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  experimental: {
    esmExternals: true,
    // optimizeCss: true, // Disabled to avoid critters dependency issue
  },
};

module.exports = nextConfig;
