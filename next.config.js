/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure image domains for Unsplash
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    // Disable image optimization for static images
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // Transpile dependencies if needed
  transpilePackages: [],
};

module.exports = nextConfig; 