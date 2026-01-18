import { META_TEXT } from "@/constants/metaTexts";
import { createMetadata } from "@/libs/metadata";
import { CareerPage } from "@/features/career";
import { getCareerData } from "@/features/career/api/getCareerData";

export const metadata = createMetadata(META_TEXT.pages.career);

export default async function CareerPageRoute() {
  const careerData = await getCareerData();

  return <CareerPage careerData={careerData} />;
}
