/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Enable app directory for newer features (server actions & optimized font loading)
  experimental: {
    serverActions: true,
    optimizeFonts: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
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
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@import "@/styles/variables.scss";`, // Optional: automatically import variables
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