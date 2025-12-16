"use client";

import React from "react";
import { NavLink } from "@/components/elements/Link/NavLink";
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
        <NavLink href={href} className={styles.linkFadeIn}>
          {label}
        </NavLink>
      )}
    </li>
  );
}
