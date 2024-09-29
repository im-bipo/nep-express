/** @type {import('next').NextConfig} */

const nextConfig = {images: {
  domains: ['lh3.googleusercontent.com'],
},
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
