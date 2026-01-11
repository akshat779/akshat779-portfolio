import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip type checking during build for faster deployments
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use the new config name for skip URL normalize
  skipProxyUrlNormalize: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
