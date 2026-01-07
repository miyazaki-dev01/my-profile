"use client";

import { useEffect, useRef } from "react";
import type { DependencyList, RefObject } from "react";
import { breakpoints } from "@/themes/breakpoints";

type Options = {
  enabled?: boolean;
  desktopMinWidthPx?: number;
  speed?: number;
  easing?: number;
};

const normalizeDelta = (delta: number, deltaMode: number) => {
  // deltaMode: 0=px, 1=line, 2=page
  if (deltaMode === 1) return delta * 16; // 1行≈16px（概算）
  if (deltaMode === 2) return delta * 800; // 1ページ≈800px（概算）
  return delta;
};

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

/**
 * PCの縦ホイールを横スクロールに変換（スムーズ）
 * タブ上では常に縦スクロールを止める
 */
export function useWheelToHorizontalScroll<T extends HTMLElement>(
  ref: RefObject<T>,
  deps: DependencyList = [],
  {
    enabled = true,
    desktopMinWidthPx = breakpoints.desktop,
    speed = 1,
    easing = 0.2,
  }: Options = {}
) {
  const targetRef = useRef<number | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const el = ref.current;
    if (!el) return;

    const mql = window.matchMedia(`(min-width: ${desktopMinWidthPx}px)`);
    const k = clamp(easing, 0.05, 0.5);

    const animate = () => {
      const target = targetRef.current;
      if (target == null) {
        frameIdRef.current = null;
        return;
      }

      const current = el.scrollLeft;
      const next = current + (target - current) * k;

      if (Math.abs(target - next) < 0.5) {
        el.scrollLeft = target;
        targetRef.current = null;
        frameIdRef.current = null;
        return;
      }

      el.scrollLeft = next;
      frameIdRef.current = requestAnimationFrame(animate);
    };

    const onWheel = (e: WheelEvent) => {
      if (!mql.matches) return;

      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;

      e.preventDefault();

      const dx = normalizeDelta(e.deltaX, e.deltaMode);
      const dy = normalizeDelta(e.deltaY, e.deltaMode);

      const delta = Math.abs(dx) > Math.abs(dy) ? dx : dy;
      if (delta === 0) return;

      const base = targetRef.current ?? el.scrollLeft;
      const nextTarget = Math.min(max, Math.max(0, base + delta * speed));

      targetRef.current = nextTarget;

      if (frameIdRef.current == null) {
        frameIdRef.current = requestAnimationFrame(animate);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      if (frameIdRef.current != null) cancelAnimationFrame(frameIdRef.current);
      frameIdRef.current = null;
      targetRef.current = null;
    };
  }, [enabled, desktopMinWidthPx, speed, easing, ...deps]);
}
