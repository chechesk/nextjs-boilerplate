import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['pokeapi.co'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
