"use client";

import { createContext, useContext } from "react";

export type ContentLoadingCtx = {
  isContentLoading: boolean;
};

export const ContentLoadingContext = createContext<ContentLoadingCtx | null>(
  null
);

/**
 * コンテンツロード状態を取得するカスタムフック
 */
export function useContentLoadingContext(): ContentLoadingCtx {
  const ctx = useContext(ContentLoadingContext);
  if (!ctx) {
    throw new Error(
      "useContentLoadingContext must be used inside <ContentLoadingProvider>."
    );
  }
  return ctx;
}
