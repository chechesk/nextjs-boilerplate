import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", 
        pathname: "/PokeAPI/sprites/**",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
