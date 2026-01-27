import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { URL as URLS } from "@/constants/urls";
import { META_TEXT } from "@/constants/metaTexts";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/constants/site";
import { barlow, roboto } from "@/libs/fonts";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { InitialLoadingProvider } from "@/providers/InitialLoadingProvider";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(URLS.appRoot),
  title: META_TEXT.root.title,
  description: META_TEXT.root.description,
  icons: { icon: META_TEXT.root.icons.icon },
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ja" className={`${barlow.variable} ${roboto.variable}`}>
      <head>
        <JsonLd site={SITE_CONFIG} />
      </head>
      <body>
        <GoogleAnalytics />
        <InitialLoadingProvider>
          <div id="__next">{children}</div>
        </InitialLoadingProvider>
      </body>
    </html>
  );
}
