import React from "react";
import { Navigation } from "@/components/layouts/Navigation";
import { PageLoadingProvider } from "@/contexts/PageLoadingContext";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <PageLoadingProvider>
      <Navigation />
      {children}
    </PageLoadingProvider>
  );
}
