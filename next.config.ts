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
  webpack(config) {
    // SVG を React コンポーネントとしてインポートする設定
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule?.test?.test?.(".svg")
    )!;

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...fileLoaderRule.resourceQuery.not, /url/],
        },
        use: ["@svgr/webpack"],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default withVanillaExtract(nextConfig);
