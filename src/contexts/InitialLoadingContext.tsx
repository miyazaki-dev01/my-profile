"use client";

import { createContext, useContext } from "react";

export type InitialLoadingCtx = { isInitialLoading: boolean };

export const InitialLoadingContext = createContext<InitialLoadingCtx | null>(
  null
);

/**
 * 初回ロード判定のコンテキストを利用する hook
 */
export function useInitialLoadingContext(): InitialLoadingCtx {
  const ctx = useContext(InitialLoadingContext);
  if (!ctx) {
    throw new Error(
      "useInitialLoadingContext must be used inside <InitialLoadingProvider>."
    );
  }
  return ctx;
}
