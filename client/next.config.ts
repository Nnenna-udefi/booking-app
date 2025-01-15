import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://dc-braiding-gqwc.onrender.com/api/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dc-braiding-gqwc.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
