import { microcmsClient } from "@/libs/microcms";
import { MICROCMS_ENDPOINT } from "@/constants/microcms";
import type { SkillItem } from "@/features/skill/types/skill";

const endpoint = MICROCMS_ENDPOINT.skill;

export async function getSkillData(): Promise<SkillItem[]> {
  const skillData = await microcmsClient.getAllContents<SkillItem>({
    endpoint: endpoint,
  });

  return skillData;
}
