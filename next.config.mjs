/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  images: {
    domains: ["images.unsplash.com", "i.pravatar.cc", "images.remotePatterns"],
  },
};

export default nextConfig;
