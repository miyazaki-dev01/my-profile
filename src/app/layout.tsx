import React from "react";
import "@/styles/globals.css";
import { barlow, roboto } from "@/lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${barlow.variable} ${roboto.variable}`}>
      <body>
        <div id="__next">{children}</div>
      </body>
    </html>
  );
}
