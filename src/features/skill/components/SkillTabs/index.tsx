"use client";

import { InternalLink } from "@/components/elements/Link/InternalLink";
import type { SkillCategoryParam } from "@/features/skill/types/skill";
import { useHorizontalScrollFade } from "@/hooks/useHorizontalScrollFade";
import { useWheelToHorizontalScroll } from "@/hooks/useWheelToHorizontalScroll";
import { SKILL_TABS } from "@/features/skill/constants/skillTabs";
import { buildSkillPath } from "@/features/skill/utils/skillPath";
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
              <InternalLink href={buildSkillPath(tab.key)} scroll={false}>
                <p className={styles.tabText({ active: isActive })}>
                  {tab.label}
                </p>
              </InternalLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
