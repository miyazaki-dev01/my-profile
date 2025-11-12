"use client";

import { usePathname } from "next/navigation";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  useState,
} from "react";

/**
 * ページ遷移時にスクロール位置を保存・復元するカスタムフック
 * - ページごとにsessionStorageで管理
 * - 戻る/進む時に前回の位置へ自動スクロール
 */
export function useScrollRestoration() {
  const pathname = usePathname();
  const key = useMemo(() => `_next_scroll_${pathname}`, [pathname]);

  // マウント済みかどうかを判定
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // レイアウト反映前にスクロール位置を復元 or トップに戻す
  useLayoutEffect(() => {
    if (!hasMounted) return; // マウント前は何もしない
    const stored = sessionStorage.getItem(key);
    if (stored) {
      window.scrollTo(0, +stored);
    } else {
      window.scrollTo(0, 0);
    }
  }, [key, hasMounted]);

  // スクロールごとに最新位置を保存
  const onScroll = useCallback(() => {
    const y = window.scrollY;
    if (y !== 0) {
      sessionStorage.setItem(key, String(y));
    } else {
      sessionStorage.removeItem(key);
    }
  }, [key]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // ページ閉じる直前に保存データをクリア
  const onBeforeUnload = useCallback(() => {
    sessionStorage.removeItem(key);
  }, [key]);

  useEffect(() => {
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [onBeforeUnload]);
}
