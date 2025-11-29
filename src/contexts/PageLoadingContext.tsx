"use client";

import React, { createContext, useContext, useMemo } from "react";
import { usePageLoading } from "@/hooks/usePageLoading";

type Ctx = { isLoading: boolean };

const PageLoadingContext = createContext<Ctx | null>(null);

export function PageLoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = usePageLoading();
  const value = useMemo(() => ({ isLoading }), [isLoading]);
  return (
    <PageLoadingContext.Provider value={value}>
      {children}
    </PageLoadingContext.Provider>
  );
}

export function usePageLoadingContext(): Ctx {
  const ctx = useContext(PageLoadingContext);
  if (!ctx)
    throw new Error(
      "usePageLoadingContext must be used inside <PageLoadingProvider>."
    );
  return ctx;
}
