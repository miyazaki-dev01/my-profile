import React from "react";
import { SkillPage } from "@/features/skill/";
import { getSkillData } from "@/features/skill/api/getSkillData";

export default async function SkillPageRoute() {
  const skillData = await getSkillData();

  return <SkillPage skillData={skillData} />;
}
