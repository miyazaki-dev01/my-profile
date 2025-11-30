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

/**
 * 厳格版: Provider が必須
 *  - BFF やルーティング制御など、「絶対に context が必要な用途」に使う
 */
export function usePageLoadingContext(): Ctx {
  const ctx = useContext(PageLoadingContext);
  if (!ctx)
    throw new Error(
      "usePageLoadingContext must be used inside <PageLoadingProvider>."
    );
  return ctx;
}

/**
 * 安全版: Provider がなくても動く
 *  - Provider がなければ isLoading=false として扱う
 */
export function usePageLoadingOptional(): Ctx {
  const ctx = useContext(PageLoadingContext);
  if (!ctx) {
    return { isLoading: false };
  }
  return ctx;
}
