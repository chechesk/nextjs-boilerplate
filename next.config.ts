import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // Dominios permitidos
        pathname: "/PokeAPI/sprites/**", // Ruta específica
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
