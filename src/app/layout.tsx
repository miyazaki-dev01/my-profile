import React from "react";
import "@/styles/globals.css";
import { Navigation } from "@/components/layouts/Navigation";
import { barlow, roboto } from "@/lib/fonts";
import { PageLoadingProvider } from "@/contexts/PageLoadingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${barlow.variable} ${roboto.variable}`}>
      <body>
        <PageLoadingProvider>
          <Navigation />
          {children}
        </PageLoadingProvider>
      </body>
    </html>
  );
}
