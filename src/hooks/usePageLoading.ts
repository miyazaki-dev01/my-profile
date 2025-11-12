"use client";

import { useState, useEffect } from "react";

/**
 * ページ読み込みローディング制御用フック
 */
export function usePageLoading() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // ページ内のすべてのリソース読み込み完了を検知
    const handleLoad = () => setLoaded(true);

    // DOM読み込み後にloadイベントが既に発火しているかチェック
    if (document.readyState === "complete") {
      // すでにロード済みなら即座に true
      setLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return loaded;
}
