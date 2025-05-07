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
  // Don't fail the build due to ESLint errors
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 