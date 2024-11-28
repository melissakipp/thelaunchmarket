/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    return config;
  },

  // Image optimization configuration
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  sassOptions: {
    includePaths: ['./src/styles'],
    implementation: require('sass')
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: false,
  },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;