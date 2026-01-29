"use client";

import { useEffect, useState } from "react";

/**
 * 初回ロード判定を行うフック
 */
export function useInitialLoading(): boolean {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    if (document.readyState !== "loading") {
      setIsInitialLoading(false);
      return;
    }

    const handleDomContentLoaded = () => {
      setIsInitialLoading(false);
    };

    window.addEventListener("DOMContentLoaded", handleDomContentLoaded);

    return () => {
      window.removeEventListener("DOMContentLoaded", handleDomContentLoaded);
    };
  }, []);

  return isInitialLoading;
}
