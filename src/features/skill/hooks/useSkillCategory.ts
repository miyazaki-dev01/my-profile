"use client";

import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { SkillCategoryParam } from "@/features/skill/types/skill";
import { SKILL_TAB_KEYS } from "@/features/skill/constants/skillTabs";
import { buildSkillPath } from "@/features/skill/utils/skillPath";

const normalizeCategory = (category: string | null): SkillCategoryParam => {
  if (!category) return "all";
  if (SKILL_TAB_KEYS.includes(category as SkillCategoryParam)) {
    return category as SkillCategoryParam;
  }
  return "all";
};

export function useSkillCategory() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawCategory = searchParams.get("category");
  const activeCategory = useMemo(
    () => normalizeCategory(rawCategory),
    [rawCategory]
  );

  useEffect(() => {
    if (rawCategory !== activeCategory) {
      router.replace(buildSkillPath(activeCategory), {
        scroll: false,
      });
    }
  }, [router, rawCategory, activeCategory]);

  return { rawCategory, activeCategory };
}
