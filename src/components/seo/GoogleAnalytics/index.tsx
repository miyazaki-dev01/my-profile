import Script from "next/script";
import React from "react";

const GA_ID = "G-1DLG2NVCDJ";

/**
 * Google Analytics コンポーネント
 * gtag.js を使用してページビューを計測
 * 本番環境でのみ有効
 */
export const GoogleAnalytics = React.memo(() => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
});
