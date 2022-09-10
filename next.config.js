/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent-man2-1.xx.fbcdn.net', 'img.itch.zone', 'scontent-lhr8-1.xx.fbcdn.net'],
  }
}

module.exports = nextConfig
