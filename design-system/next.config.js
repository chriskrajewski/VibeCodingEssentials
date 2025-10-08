/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mwi-ecommerce-inventory.s3.us-east-2.amazonaws.com', // Replace with your external image host
        port: '', // Leave empty if no specific port
        pathname: '**', // Use a wildcard for dynamic paths
      },

      // Add more patterns as needed
    ],
  },
};

module.exports = nextConfig;
