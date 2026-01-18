import { META_TEXT } from "@/constants/metaTexts";
import { createMetadata } from "@/libs/metadata";
import { SkillPage } from "@/features/skill/";
import { getSkillData } from "@/features/skill/api/getSkillData";

export const metadata = createMetadata(META_TEXT.pages.skill);

export default async function SkillPageRoute() {
  const skillData = await getSkillData();

  return <SkillPage skillData={skillData} />;
}
