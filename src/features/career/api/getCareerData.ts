import { microcmsClient } from "@/libs/microcms";
import { MICROCMS_ENDPOINT } from "@/constants/microcms";
import type { CareerItem } from "@/features/career/types/career";

const endpoint = MICROCMS_ENDPOINT.career;

export async function getCareerData(): Promise<CareerItem[]> {
  const careerData = await microcmsClient.getAllContents<CareerItem>({
    endpoint: endpoint,
    queries: {
      orders: "-date",
    },
  });

  return careerData;
}
