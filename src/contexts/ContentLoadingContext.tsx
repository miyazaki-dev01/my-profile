"use client";

import React, { createContext, useContext } from "react";
import { useContentLoading } from "@/hooks/useContentLoading";

type ContentLoadingCtx = { isContentLoading: boolean };

const ContentLoadingContext = createContext<ContentLoadingCtx | null>(null);

/**
 * ページ全体（画像なども含む）のロード完了を監視するコンテキストプロバイダー
 */
export function ContentLoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isContentLoading = useContentLoading();
  return (
    <ContentLoadingContext.Provider value={{ isContentLoading }}>
      {children}
    </ContentLoadingContext.Provider>
  );
}

export function useContentLoadingContext(): ContentLoadingCtx {
  const ctx = useContext(ContentLoadingContext);
  if (!ctx)
    throw new Error(
      "useContentLoadingContext must be used inside <ContentLoadingProvider>."
    );
  return ctx;
}
