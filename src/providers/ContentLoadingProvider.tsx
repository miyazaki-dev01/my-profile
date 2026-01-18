"use client";

import React from "react";
import { useContentLoading } from "@/hooks/useContentLoading";
import {
  ContentLoadingContext,
  type ContentLoadingCtx,
} from "@/contexts/ContentLoadingContext";

type Props = {
  children: React.ReactNode;
};

/**
 * ページ全体（画像なども含む）のロード完了を監視するコンテキストプロバイダー
 */
export function ContentLoadingProvider({ children }: Props) {
  const isContentLoading = useContentLoading();

  const value: ContentLoadingCtx = { isContentLoading };

  return (
    <ContentLoadingContext.Provider value={value}>
      {children}
    </ContentLoadingContext.Provider>
  );
}
