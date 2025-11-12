import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PrelineScript from "../components/PrelineScript";
import Script from "next/script";
import { META } from "@/constants/meta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(META.siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Script
        stylesheets={[
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
        ]}
      />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
