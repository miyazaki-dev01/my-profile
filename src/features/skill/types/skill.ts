export type SkillCategory = "lang" | "fwk" | "infra" | "tool" | "cert";

export type SkillCategoryParam = "all" | SkillCategory;

export type SkillItem = {
  id: string;
  name: string;
  category: SkillCategory[];
  label?: string;
  icon: {
    url: string;
    width: number;
    height: number;
  };
  subIcon?: {
    url: string;
    width: number;
    height: number;
  };
};
