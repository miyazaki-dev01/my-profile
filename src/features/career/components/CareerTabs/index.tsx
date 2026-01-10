"use client";

import React from "react";
import Link from "next/link";
import { buildCareerPath } from "@/features/career/utils/careerPath";
import { useHorizontalScrollFade } from "@/hooks/useHorizontalScrollFade";
import { useWheelToHorizontalScroll } from "@/hooks/useWheelToHorizontalScroll";
import * as styles from "./style.css";

type Props = {
  years: number[];
  activeYear: number | null;
};

export function CareerTabs({ years, activeYear }: Props) {
  const deps = [years.join(","), activeYear];
  const {
    ref: tabListRef,
    showLeftFade,
    showRightFade,
  } = useHorizontalScrollFade<HTMLUListElement>(deps);
  useWheelToHorizontalScroll(tabListRef, deps, {});

  if (years.length === 0) return null;

  return (
    <div className={styles.tabsWrap}>
      {showLeftFade && <div className={styles.leftFade} />}
      {showRightFade && <div className={styles.rightFade} />}

      <ul ref={tabListRef} className={styles.tabList}>
        {years.map((year) => {
          const isActive = year === activeYear;

          return (
            <li key={year} className={styles.tabItem}>
              <Link href={buildCareerPath(year)} scroll={false}>
                <p className={styles.tabText({ active: isActive })}>{year}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
