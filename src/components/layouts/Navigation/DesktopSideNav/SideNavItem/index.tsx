"use client";

import React from "react";
import Link from "next/link";
import { useInitialLoadingContext } from "@/contexts/InitialLoadingContext";
import * as styles from "./style.css";

type Props = {
  href: string;
  label: string;
};

export function SideNavItem({ href, label }: Props) {
  const { isInitialLoading } = useInitialLoadingContext();

  return (
    <li>
      {isInitialLoading ? (
        <span
          className={styles.skeletonLine}
          style={{ width: `${Math.max(label.length, 3)}ch` }}
        />
      ) : (
        <Link href={href} className={styles.linkFadeIn}>
          {label}
        </Link>
      )}
    </li>
  );
}
