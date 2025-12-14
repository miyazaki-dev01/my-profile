import React from "react";
import { ContentLoadingProvider } from "@/providers/ContentLoadingProvider";
import { ScrollRestoration } from "@/components/elements/ScrollRestoration";
import { BaseSiteLayout } from "@/components/layouts/BaseSiteLayout";

type Props = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: Props) {
  return (
    <ContentLoadingProvider>
      <ScrollRestoration />
      <BaseSiteLayout>{children}</BaseSiteLayout>
    </ContentLoadingProvider>
  );
}
