/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    domains: ["localhost", "raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
