import type { NextConfig } from "next";

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

// 静的ビルド（export）の判定フラグ
const isStaticExport = Boolean(process.env.STATIC_EXPORT === "true");

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined, // 静的ビルド時のみ 'export'
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        pathname: "/**",
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
