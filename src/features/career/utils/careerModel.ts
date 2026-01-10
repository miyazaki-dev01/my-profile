import type { CareerItem } from "@/features/career/types/career";
import { getJstYear, toTimestamp } from "@/libs/date";

export type CareerItemWithYear = CareerItem & { year: number };

/**
 * CareerItem[] を
 * - JST年を付与
 * - 日付降順でソート
 * - 年タブ配列を作成
 * に変換する
 */
export const buildCareerModel = (careerData: CareerItem[]) => {
  const items: CareerItemWithYear[] = careerData
    .map((item) => {
      const year = getJstYear(item.date);
      if (!year) return null;
      return { ...item, year };
    })
    .filter((v): v is CareerItemWithYear => v !== null)
    .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date));

  const years = Array.from(new Set(items.map((i) => i.year))).sort(
    (a, b) => b - a
  );

  return { items, years };
};

/**
 * 選択年だけに絞る
 */
export const filterCareerByYear = (
  items: CareerItemWithYear[],
  activeYear: number | null
) => {
  if (!activeYear) return [];
  return items.filter((i) => i.year === activeYear);
};
