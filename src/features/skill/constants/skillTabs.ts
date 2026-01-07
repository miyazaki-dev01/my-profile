import type { SkillCategoryParam } from "@/features/skill/types/skill";

export const SKILL_TABS = [
  { key: "all", label: "ALL" },
  { key: "lang", label: "LANG" },
  { key: "fwk", label: "FWK" },
  { key: "infra", label: "INFRA" },
  { key: "tool", label: "TOOL" },
  { key: "cert", label: "CERT" },
] as const satisfies ReadonlyArray<{
  key: SkillCategoryParam;
  label: string;
}>;

export const SKILL_TAB_KEYS = SKILL_TABS.map((t) => t.key);
