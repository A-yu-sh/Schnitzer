/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "unsplash.com",
      "firebasestorage.googleapis.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
