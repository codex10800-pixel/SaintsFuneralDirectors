/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // App router is enabled by default in Next 14; remove experimental flags
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  }
}

module.exports = nextConfig
