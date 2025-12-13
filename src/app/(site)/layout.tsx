import React from "react";
import { ContentLoadingProvider } from "@/providers/ContentLoadingProvider";
import { ScrollRestoration } from "@/components/elements/ScrollRestoration";
import { BaseSiteLayout } from "@/components/layouts/BaseSiteLayout";

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <ContentLoadingProvider>
      <ScrollRestoration />
      <BaseSiteLayout>{children}</BaseSiteLayout>
    </ContentLoadingProvider>
  );
}
