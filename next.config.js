/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  images: {
    loader: 'default', // Use the default loader without optimization
    formats: ['image/webp',],
  },
};

const path = require('path');

module.exports = nextConfig;