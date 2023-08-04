/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dqg4c1i67ln7w.cloudfront.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
