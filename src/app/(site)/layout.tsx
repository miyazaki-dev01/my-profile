import React, { Suspense } from "react";
import { ContentLoadingProvider } from "@/providers/ContentLoadingProvider";
import { ScrollRestoration } from "@/components/elements/ScrollRestoration";
import { BaseSiteLayout } from "@/components/layouts/BaseSiteLayout";
import { getLatestCareerYear } from "@/features/career/api/getCareerData";

type Props = {
  children: React.ReactNode;
};

export default async function SiteLayout({ children }: Props) {
  const careerLatestYear = await getLatestCareerYear();

  return (
    <ContentLoadingProvider>
      <Suspense fallback={null}>
        <ScrollRestoration />
      </Suspense>

      <BaseSiteLayout careerLatestYear={careerLatestYear}>
        {children}
      </BaseSiteLayout>
    </ContentLoadingProvider>
  );
}
