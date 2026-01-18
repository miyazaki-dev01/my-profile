import { PATH } from "@/constants/paths";

export const buildCareerPath = (year?: number | null) => {
  if (!year) return PATH.career;
  return `${PATH.career}?year=${year}`;
};
