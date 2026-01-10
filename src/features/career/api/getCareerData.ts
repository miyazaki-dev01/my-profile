import { microcmsClient } from "@/libs/microcms";
import { MICROCMS_ENDPOINT } from "@/constants/microcms";
import type { CareerItem } from "@/features/career/types/career";
import { getJstYear } from "@/libs/date";

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

export async function getLatestCareerYear(): Promise<number | null> {
  const res = await microcmsClient.get<{
    contents: Pick<CareerItem, "date">[];
  }>({
    endpoint: endpoint,
    queries: {
      orders: "-date",
      limit: 1,
      fields: "date",
    },
  });

  const date = res.contents[0]?.date;
  const year = date ? getJstYear(date) : null;

  return year;
}
