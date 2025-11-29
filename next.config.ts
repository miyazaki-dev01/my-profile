import type { NextConfig } from "next";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

// 静的ビルド（export）の判定フラグ
const isStaticExport = Boolean(process.env.STATIC_EXPORT === "true");

// Vanilla Extract プラグインの作成
const withVanillaExtract = createVanillaExtractPlugin();

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
