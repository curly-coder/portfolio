import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "lucide-react",
    ],
  },
};

export default nextConfig;
