/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;
