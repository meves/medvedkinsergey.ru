/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    url_api_development: 'http://localhost:3000/api',
    url_api_production: 'https://medvedkinsergey.ru:443/api',
    host: 'localhost',
    database: 'portfolio-site',
    user: 'root',
    password_production: 'Oedaim6vihee0Afo',
    password_development: 'Hk_61-S*d+85',      
  }
}

module.exports = nextConfig
