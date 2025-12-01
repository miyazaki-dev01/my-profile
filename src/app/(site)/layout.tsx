import React from "react";
import { PageLoadingProvider } from "@/contexts/PageLoadingContext";
import { Navigation } from "@/components/layouts/Navigation";
import { BaseSiteLayout } from "@/components/layouts/BaseSiteLayout";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <PageLoadingProvider>
      <Navigation />
      <BaseSiteLayout>{children}</BaseSiteLayout>
    </PageLoadingProvider>
  );
}
