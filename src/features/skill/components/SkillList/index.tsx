import React from "react";
import type { SkillItem } from "@/features/skill/types/skill";
import { SkillCard } from "@/features/skill/components/SkillCard";
import * as styles from "./style.css";

type Props = {
  skillItems: SkillItem[];
};

export function SkillList({ skillItems }: Props) {
  return (
    <div className={styles.skillList}>
      {skillItems.map((skillItem) => (
        <SkillCard key={skillItem.id} skillItem={skillItem} />
      ))}
    </div>
  );
}
