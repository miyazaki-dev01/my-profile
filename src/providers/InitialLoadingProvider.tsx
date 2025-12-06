"use client";

import React from "react";
import { useInitialLoading } from "@/hooks/useInitialLoading";
import {
  InitialLoadingContext,
  type InitialLoadingCtx,
} from "@/contexts/InitialLoadingContext";

type Props = {
  children: React.ReactNode;
};

/**
 * 初回ロード判定のコンテキストプロバイダー
 */
export function InitialLoadingProvider({ children }: Props) {
  const isInitialLoading = useInitialLoading();

  const value: InitialLoadingCtx = { isInitialLoading };

  return (
    <InitialLoadingContext.Provider value={value}>
      {children}
    </InitialLoadingContext.Provider>
  );
}
