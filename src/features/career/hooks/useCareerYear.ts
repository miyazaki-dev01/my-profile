"use client";

import { useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { buildCareerPath } from "@/features/career/utils/careerPath";

const normalizeYear = (rawYear: string | null, years: number[]) => {
  if (years.length === 0) return null;
  if (!rawYear) return years[0];

  const parsed = Number(rawYear);
  if (!Number.isFinite(parsed)) return years[0];

  return years.includes(parsed) ? parsed : years[0];
};

export function useCareerYear(years: number[]) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawYear = searchParams.get("year");

  const yearsKey = years.join(",");

  const activeYear = useMemo(
    () => normalizeYear(rawYear, years),
    [rawYear, yearsKey]
  );

  useEffect(() => {
    if (!activeYear) return;

    if (rawYear !== String(activeYear)) {
      router.replace(buildCareerPath(activeYear), { scroll: false });
    }
  }, [router, rawYear, activeYear]);

  return { rawYear, activeYear };
}
