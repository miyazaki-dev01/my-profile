"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type Props = Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
  children: React.ReactNode;
};

/**
 * ナビゲーション用の Link ラッパー
 * - 現在の URL と href が同じ場合は遷移をキャンセルし、スクロールが先頭に戻るのを防ぐ
 */
export function NavLink({ href, children, ...rest }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const current = useMemo(() => {
    const query = searchParams?.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  const isSamePage = href === current;

  const handleClick = useCallback<
    NonNullable<React.ComponentPropsWithoutRef<typeof Link>["onClick"]>
  >(
    (e) => {
      rest.onClick?.(e);
      if (e.defaultPrevented) return;

      if (isSamePage) {
        e.preventDefault();
      }
    },
    [rest.onClick, isSamePage]
  );

  return (
    <Link href={href} scroll={false} {...rest} onClick={handleClick}>
      {children}
    </Link>
  );
}
