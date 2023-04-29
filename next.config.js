/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images2.imgbox.com',
        port: '',
        pathname: '/**/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**/**/**/**/**',
      },
      {
        protocol: 'https',
        hostname: 'qmartek.com',
        pathname: '/**/**/**',
      },
      {
        protocol: 'https',
        hostname: 'qmartek.com',
        pathname: '/**/**',
      },
     
    ],
  },
}

module.exports = nextConfig
