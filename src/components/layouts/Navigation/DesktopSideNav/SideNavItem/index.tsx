"use client";

import React from "react";
import Link from "next/link";
import { usePageLoadingContext } from "@/contexts/PageLoadingContext";
import * as styles from "./style.css";

type Props = {
  href: string;
  label: string;
};

export const SideNavItem: React.FC<Props> = React.memo(({ href, label }) => {
  const { isLoading } = usePageLoadingContext();

  return (
    <li>
      {isLoading ? (
        <span
          className={styles.skeletonLine}
          style={{ width: `${Math.max(label.length, 3)}ch` }}
        />
      ) : (
        <Link href={href}>{label}</Link>
      )}
    </li>
  );
});
