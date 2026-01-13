import { CareerPage } from "@/features/career";
import { getCareerData } from "@/features/career/api/getCareerData";

export default async function CareerPageRoute() {
  const careerData = await getCareerData();

  return <CareerPage careerData={careerData} />;
}
