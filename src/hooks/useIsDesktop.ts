"use client";

import { useEffect, useState } from "react";
import { breakpoints } from "@/themes/breakpoints";

const desktopMediaQuery = `(min-width: ${breakpoints.desktop}px)`;

/**
 * デスクトップ幅以上かどうかを示すフラグを返すフック
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(desktopMediaQuery).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopMediaQuery);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    // エフェクト実行時点の状態でもう一度同期
    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDesktop;
}
