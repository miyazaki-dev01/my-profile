"use client";

import React, { createContext, useContext } from "react";
import { useInitialLoading } from "@/hooks/useInitialLoading";

type InitialLoadingCtx = { isInitialLoading: boolean };

const InitialLoadingContext = createContext<InitialLoadingCtx | null>(null);

/**
 * 初回ロード判定のコンテキストプロバイダー
 */
export function InitialLoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isInitialLoading = useInitialLoading();
  return (
    <InitialLoadingContext.Provider value={{ isInitialLoading }}>
      {children}
    </InitialLoadingContext.Provider>
  );
}

export function useInitialLoadingContext(): InitialLoadingCtx {
  const ctx = useContext(InitialLoadingContext);
  if (!ctx)
    throw new Error(
      "useInitialLoadingContext must be used inside <InitialLoadingProvider>."
    );
  return ctx;
}
