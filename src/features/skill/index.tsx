"use client";

import { useMemo } from "react";
import type { SkillItem } from "@/features/skill/types/skill";
import { useSkillCategory } from "@/features/skill/hooks/useSkillCategory";
import { PageTitle } from "@/components/elements/PageTitle";
import { PAGES } from "@/constants/pages";
import { SkillTabs } from "@/features/skill/components/SkillTabs";
import { SkillList } from "@/features/skill/components/SkillList";
import * as styles from "./style.css";

type Props = {
  skillData: SkillItem[];
};

export function SkillPage({ skillData }: Props) {
  const { activeCategory } = useSkillCategory();

  const filteredSkillData = useMemo(() => {
    if (activeCategory === "all") return skillData;
    return skillData.filter((skillItem) =>
      skillItem.category.includes(activeCategory)
    );
  }, [skillData, activeCategory]);

  return (
    <div className={styles.root}>
      <div className={styles.pcStickyBlock}>
        <PageTitle>{PAGES.skill.title}</PageTitle>

        <div className={styles.spStickyBlock}>
          <SkillTabs activeCategory={activeCategory} />
        </div>
      </div>

      <SkillList skillItems={filteredSkillData} />
    </div>
  );
}
