"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DependencyList } from "react";

type UseHorizontalScrollFadeResult<T extends HTMLElement> = {
  ref: React.RefObject<T>;
  showLeftFade: boolean;
  showRightFade: boolean;
};

/**
 * 横スクロール要素の左右フェード表示制御
 */
export function useHorizontalScrollFade<T extends HTMLElement>(
  deps: DependencyList = [],
  epsilon = 1
): UseHorizontalScrollFadeResult<T> {
  const ref = useRef<T>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const updateFade = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    if (maxScrollLeft <= 0) {
      setShowLeftFade(false);
      setShowRightFade(false);
      return;
    }

    const atLeft = el.scrollLeft <= epsilon;
    const atRight = el.scrollLeft >= maxScrollLeft - epsilon;

    setShowLeftFade(!atLeft);
    setShowRightFade(!atRight);
  }, [epsilon]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frameId: number | null = null;
    const requestUpdate = () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateFade);
    };

    requestUpdate();

    const onScroll = () => requestUpdate();
    const onResize = () => requestUpdate();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateFade, ...deps]);

  return { ref, showLeftFade, showRightFade };
}
