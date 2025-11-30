import React from "react";
import "@/styles/globals.css";
import { Navigation } from "@/components/layouts/Navigation";
import { PageLoadingProvider } from "@/contexts/PageLoadingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLoadingProvider>
      <Navigation />
      {children}
    </PageLoadingProvider>
  );
}
