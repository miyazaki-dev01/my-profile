import React from "react";
import { ContentLoadingProvider } from "@/contexts/ContentLoadingContext";
import { BaseSiteLayout } from "@/components/layouts/BaseSiteLayout";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <ContentLoadingProvider>
      <BaseSiteLayout>{children}</BaseSiteLayout>
    </ContentLoadingProvider>
  );
}
