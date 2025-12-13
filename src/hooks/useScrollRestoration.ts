"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";

const KEY_PREFIX = "_next_scroll_";

type Props = {
  isPageLoading: boolean;
};

/**
 * ページ単位（pathname + query）でスクロール位置を sessionStorage に保存・復元する
 * - 保存キー: "_next_scroll_" + asPath（例: "/blog?category=all"）
 * - 遷移開始相当（history.pushState / replaceState / popstate）で「遷移前ページ」の scrollY を保存
 * - scrollY === 0 の場合は保存しない（既存があれば削除）
 * - ページ表示時、保存値があれば復元（isPageLoading === true の間は復元しない）
 * - リロード/離脱でも保持するため、beforeunload / pagehide / visibilitychange(hidden) でも保存する
 * - ブラウザ標準の自動復元と競合しないよう history.scrollRestoration を "manual" に設定し、解除時に元へ戻す
 */
export function useScrollRestoration({ isPageLoading }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const asPath = useMemo(() => {
    const query = searchParams?.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  const key = useMemo(() => `${KEY_PREFIX}${asPath}`, [asPath]);

  const currentAsPathRef = useRef(asPath);
  useEffect(() => {
    currentAsPathRef.current = asPath;
  }, [asPath]);

  const persistScrollFor = useCallback((asPathToSave: string) => {
    const saveKey = `${KEY_PREFIX}${asPathToSave}`;
    const existed = sessionStorage.getItem(saveKey);
    const y = window.scrollY;

    if (y === 0) {
      if (existed) sessionStorage.removeItem(saveKey);
      return;
    }

    sessionStorage.setItem(saveKey, JSON.stringify(y));
  }, []);

  useLayoutEffect(() => {
    if (isPageLoading) return;

    const stored = sessionStorage.getItem(key);
    if (!stored) return;

    let y: unknown;
    try {
      y = JSON.parse(stored);
    } catch {
      sessionStorage.removeItem(key);
      return;
    }

    if (typeof y !== "number" || !Number.isFinite(y)) {
      sessionStorage.removeItem(key);
      return;
    }

    window.scrollTo(0, y);
    requestAnimationFrame(() => window.scrollTo(0, y));
  }, [key, asPath, isPageLoading]);

  useEffect(() => {
    const prevScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const origPushState = window.history.pushState;
    const origReplaceState = window.history.replaceState;
    const saveBeforeNavigate = () => {
      persistScrollFor(currentAsPathRef.current);
    };

    window.history.pushState = function (...args) {
      saveBeforeNavigate();
      return origPushState.apply(this, args as any);
    };

    window.history.replaceState = function (...args) {
      saveBeforeNavigate();
      return origReplaceState.apply(this, args as any);
    };

    const onPopState = () => saveBeforeNavigate();
    window.addEventListener("popstate", onPopState);

    return () => {
      window.history.pushState = origPushState;
      window.history.replaceState = origReplaceState;
      window.removeEventListener("popstate", onPopState);
      window.history.scrollRestoration = prevScrollRestoration;
    };
  }, [persistScrollFor]);

  useEffect(() => {
    const saveNow = () => persistScrollFor(currentAsPathRef.current);

    window.addEventListener("beforeunload", saveNow);
    window.addEventListener("pagehide", saveNow);

    const onVis = () => {
      if (document.visibilityState === "hidden") saveNow();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.removeEventListener("beforeunload", saveNow);
      window.removeEventListener("pagehide", saveNow);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [persistScrollFor]);
}
