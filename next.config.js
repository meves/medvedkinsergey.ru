/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    url_api: 'http://localhost:3000/api',
  }
}

module.exports = nextConfig
