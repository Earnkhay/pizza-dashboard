/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' as it's incompatible with API routes
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'], // For Google OAuth profile pictures
  },
}

module.exports = nextConfig