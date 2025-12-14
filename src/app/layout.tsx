import React from "react";
import "@/styles/globals.css";
import { barlow, roboto } from "@/libs/fonts";
import { InitialLoadingProvider } from "@/providers/InitialLoadingProvider";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
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
