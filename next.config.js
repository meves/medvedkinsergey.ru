/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    url_api: 'http://localhost:3000/api',
    url_admin_clientMessages: 'http://localhost:3000/admin/client-messages'
  }
}

module.exports = nextConfig
