"use client";

import React from "react";
import Link from "next/link";
import type { SkillCategoryParam } from "@/features/skill/types/skill";
import { useHorizontalScrollFade } from "@/hooks/useHorizontalScrollFade";
import { useWheelToHorizontalScroll } from "@/hooks/useWheelToHorizontalScroll";
import { SKILL_TABS } from "@/features/skill/constants/skillTabs";
import { PATH } from "@/constants/paths";
import * as styles from "./style.css";

type Props = {
  activeCategory: SkillCategoryParam;
};

export function SkillTabs({ activeCategory }: Props) {
  const {
    ref: tabListRef,
    showLeftFade,
    showRightFade,
  } = useHorizontalScrollFade<HTMLUListElement>([activeCategory]);
  useWheelToHorizontalScroll(tabListRef, [activeCategory], {});

  return (
    <div className={styles.tabsWrap}>
      {showLeftFade && <div className={styles.leftFade} />}
      {showRightFade && <div className={styles.rightFade} />}

      <ul ref={tabListRef} className={styles.tabList}>
        {SKILL_TABS.map((tab) => {
          const isActive = tab.key === activeCategory;

          return (
            <li key={tab.key} className={styles.tabItem}>
              <Link href={`${PATH.skill}?category=${tab.key}`} scroll={false}>
                <p className={styles.tabText({ active: isActive })}>
                  {tab.label}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
