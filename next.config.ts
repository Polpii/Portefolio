import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/doc": ["./private-docs/**/*"],
  },
};

export default nextConfig;
