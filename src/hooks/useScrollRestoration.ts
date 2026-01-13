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
  isPageLoading?: boolean;
};

type NavContext = {
  fromPathname: string;
  fromScrollY: number;
  toPathname: string;
  toAsPath: string;
};

/**
 * pathname と search から asPath を組み立てる
 */
const buildAsPath = (pathname: string, search: string) =>
  search ? `${pathname}${search}` : pathname;

/**
 * history.pushState/replaceState の第3引数（url）を安全にパースする
 */
const parseUrlArg = (
  url: any
): { pathname: string; search: string; asPath: string } => {
  if (!url) {
    const pathname = window.location.pathname;
    const search = window.location.search;
    return { pathname, search, asPath: buildAsPath(pathname, search) };
  }

  try {
    const u = new URL(String(url), window.location.href);
    return {
      pathname: u.pathname,
      search: u.search,
      asPath: buildAsPath(u.pathname, u.search),
    };
  } catch {
    const pathname = window.location.pathname;
    const search = window.location.search;
    return { pathname, search, asPath: buildAsPath(pathname, search) };
  }
};

/**
 * sessionStorage から保存済みスクロール位置を取得する
 */
const readStoredY = (asPath: string): number | null => {
  const raw = sessionStorage.getItem(`${KEY_PREFIX}${asPath}`);
  if (!raw) return null;

  try {
    const y = JSON.parse(raw);
    if (typeof y === "number" && Number.isFinite(y)) return y;
  } catch {
    // noop
  }

  sessionStorage.removeItem(`${KEY_PREFIX}${asPath}`);
  return null;
};

/**
 * sessionStorage にスクロール位置を保存する
 */
const writeStoredY = (asPath: string, y: number) => {
  const k = `${KEY_PREFIX}${asPath}`;

  if (y === 0) {
    sessionStorage.removeItem(k);
    return;
  }

  sessionStorage.setItem(k, JSON.stringify(y));
};

/**
 * スクロール保存・復元
 *
 * ▼要件（このフックの挙動）
 * - 保存キー: asPath（pathname + query）
 * - 保存トリガー: pathname が変わる遷移のときだけ
 * - 復元トリガー: asPath が変わるとき
 *   - pathname変更: 保存があれば復元 / 無ければトップ
 *   - query変更: 保存があれば復元 / 無ければ遷移前scrollYを維持
 *
 * ▼処理の全体像（大きな流れ）
 * 1) スクロール中は常に latestScrollYRef に「最新の scrollY」を保存
 * 2) 履歴操作（pushState/replaceState/popstate）をフックし、遷移の「直前」に captureNav を実行
 *    - pathname が変わるなら、遷移元 asPath に対して scrollY を保存
 *    - 遷移先情報を pendingNavRef に入れて、次の復元判断に使う
 * 3) 画面側で asPath が変わったら（= 実際に遷移が反映されたら）useLayoutEffect で復元処理
 */
export function useScrollRestoration({ isPageLoading = false }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 現在URL（クエリ込み）
  const asPath = useMemo(() => {
    const q = searchParams?.toString();
    return q ? `${pathname}?${q}` : pathname;
  }, [pathname, searchParams]);

  // 常に「最新のスクロール位置」を保持するための ref
  const latestScrollYRef = useRef(0);
  useEffect(() => {
    latestScrollYRef.current = window.scrollY;

    const onScroll = () => {
      latestScrollYRef.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 「直前に見ていたページ」の情報を保持
  const lastPathnameRef = useRef(pathname);
  const lastAsPathRef = useRef(asPath);

  // 「この遷移でどう復元すべきか」を受け渡す
  const pendingNavRef = useRef<NavContext | null>(null);

  // React側の値も同期（直近を保持）
  useEffect(() => {
    lastPathnameRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    lastAsPathRef.current = asPath;
  }, [asPath]);

  // 遷移の直前に呼ばれる（「保存すべきか？」と「復元時にどうするか？」の情報をここで固める）
  const captureNav = useCallback((toPathname: string, toAsPath: string) => {
    const fromPathname = lastPathnameRef.current;
    const fromAsPath = lastAsPathRef.current;
    const fromScrollY = latestScrollYRef.current;

    if (fromPathname !== toPathname) {
      writeStoredY(fromAsPath, fromScrollY);
    }

    pendingNavRef.current = {
      fromPathname,
      fromScrollY,
      toPathname,
      toAsPath,
    };

    lastPathnameRef.current = toPathname;
    lastAsPathRef.current = toAsPath;
  }, []);

  // pushState/replaceState/popstate をフックして遷移を捕捉
  useEffect(() => {
    const prevScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const origPushState = window.history.pushState;
    const origReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      const to = parseUrlArg(args[2]);
      captureNav(to.pathname, to.asPath);
      return origPushState.apply(this, args as any);
    };

    window.history.replaceState = function (...args) {
      const to = parseUrlArg(args[2]);
      captureNav(to.pathname, to.asPath);
      return origReplaceState.apply(this, args as any);
    };

    const onPopState = () => {
      const toPathname = window.location.pathname;
      const toAsPath = buildAsPath(
        window.location.pathname,
        window.location.search
      );
      captureNav(toPathname, toAsPath);
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.history.pushState = origPushState;
      window.history.replaceState = origReplaceState;
      window.removeEventListener("popstate", onPopState);
      window.history.scrollRestoration = prevScrollRestoration;
    };
  }, [captureNav]);

  // 復元トリガー：asPath（pathname+query）が変わったとき
  useLayoutEffect(() => {
    if (isPageLoading) return;

    const pending = pendingNavRef.current;

    if (!pending) {
      const stored = readStoredY(asPath);
      window.scrollTo(0, stored ?? 0);
      return;
    }
    if (pending.toAsPath !== asPath) return;

    const stored = readStoredY(pending.toAsPath);

    if (stored !== null) {
      window.scrollTo(0, stored);
      pendingNavRef.current = null;
      return;
    }

    const pathnameChanged = pending.fromPathname !== pending.toPathname;

    if (pathnameChanged) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, pending.fromScrollY);
    }

    pendingNavRef.current = null;
  }, [asPath, isPageLoading]);

  // 離脱/リロード時の保険（クエリ込みキーで保存）
  useEffect(() => {
    const saveNow = () => writeStoredY(asPath, latestScrollYRef.current);

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
  }, [asPath]);
}
