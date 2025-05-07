/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure image domains for Unsplash
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    // Disable image optimization for static images
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // Transpile dependencies if needed
  transpilePackages: [],
  // Add additional settings if needed
  experimental: {
    // Disable server components since we're using client components
    appDir: true,
  },
};

module.exports = nextConfig; 