"use client";

import React, { useCallback } from "react";
import { InternalLink } from "@/components/elements/Link/InternalLink";

type Props = Omit<
  React.ComponentPropsWithoutRef<typeof InternalLink>,
  "href"
> & {
  href: string;
  children: React.ReactNode;
};

/**
 * ナビゲーション用の Link ラッパー
 * - 現在の URL と href が同じ場合は遷移をキャンセルし、スクロールが先頭に戻るのを防ぐ
 */
export function NavLink({ href, children, ...rest }: Props) {
  const handleClick = useCallback<
    NonNullable<React.ComponentPropsWithoutRef<typeof InternalLink>["onClick"]>
  >(
    (e) => {
      rest.onClick?.(e);
      if (e.defaultPrevented) return;

      const current = `${window.location.pathname}${window.location.search}`;
      if (href === current) e.preventDefault();
    },
    [rest.onClick, href]
  );

  return (
    <InternalLink href={href} scroll={false} {...rest} onClick={handleClick}>
      {children}
    </InternalLink>
  );
}
