/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/api-dev/:path*',
        destination: 'http://localhost:4000/:path*'
      }
    ];
  }
};
module.exports = nextConfig;
