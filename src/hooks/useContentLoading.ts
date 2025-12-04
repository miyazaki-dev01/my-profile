"use client";

import { useEffect, useState } from "react";

/**
 * ページ全体（画像なども含む）のロード完了を監視
 */
export function useContentLoading(): boolean {
  const [isLoading, setIsLoading] = useState(
    () => typeof document === "undefined" || document.readyState !== "complete"
  );

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
      return;
    }
    const handleLoad = () => setIsLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return isLoading;
}
