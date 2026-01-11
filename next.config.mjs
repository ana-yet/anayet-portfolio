/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export', // Enable static site generation
  compress: true, // Enable compression (handled by hosting provider for static exports)
  poweredByHeader: false, // Remove X-Powered-By header for security
  reactStrictMode: true, // Enable React strict mode for better performance and error detection
  swcMinify: true, // Use SWC for minification (faster than Terser)
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  // Note: Headers are not supported in static export
  // Configure headers in your hosting provider (Vercel, Netlify, etc.)
  // For Vercel: Use vercel.json
  // For Netlify: Use _headers file or netlify.toml
};

export default nextConfig;
