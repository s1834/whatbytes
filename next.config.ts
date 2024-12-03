import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**", // Allows all paths under this domain
      },
    ],
  },
  /* other config options here */
};

export default nextConfig;
