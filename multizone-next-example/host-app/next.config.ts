import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: "/commissions/:path*",
        destination: "http://localhost:3002/commissions/:path*"
      }
    ]
  }

};

export default nextConfig;
