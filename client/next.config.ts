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
    domains: ["dc-braiding-gqwc.onrender.com"],
  },
};

export default nextConfig;
