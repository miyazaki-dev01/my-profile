import React from "react";
import "@/styles/globals.css";
import { barlow, roboto } from "@/lib/fonts";
import { InitialLoadingProvider } from "@/contexts/InitialLoadingContext";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja" className={`${barlow.variable} ${roboto.variable}`}>
      <body>
        <InitialLoadingProvider>
          <div id="__next">{children}</div>
        </InitialLoadingProvider>
      </body>
    </html>
  );
}
