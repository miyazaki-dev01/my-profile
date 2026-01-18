import { PATH } from "@/constants/paths";
import type { SkillCategoryParam } from "@/features/skill/types/skill";

export const DEFAULT_SKILL_CATEGORY: SkillCategoryParam = "all";

export const buildSkillPath = (
  category?: SkillCategoryParam | string | null
) => {
  const c = category ?? DEFAULT_SKILL_CATEGORY;
  return `${PATH.skill}?category=${c}`;
};
