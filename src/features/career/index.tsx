"use client";

import React, { useMemo } from "react";
import type { CareerItem } from "@/features/career/types/career";
import { useCareerYear } from "@/features/career/hooks/useCareerYear";
import {
  buildCareerModel,
  filterCareerByYear,
} from "@/features/career/utils/careerModel";
import { PageTitle } from "@/components/elements/PageTitle";
import { PAGES } from "@/constants/pages";
import { CareerTabs } from "@/features/career/components/CareerTabs";
import { CareerList } from "@/features/career/components/CareerList";
import * as styles from "./style.css";

type Props = {
  careerData: CareerItem[];
};

export function CareerPage({ careerData }: Props) {
  const { items, years } = useMemo(
    () => buildCareerModel(careerData),
    [careerData]
  );

  const { activeYear } = useCareerYear(years);

  const visibleCareerItems = useMemo(
    () => filterCareerByYear(items, activeYear),
    [items, activeYear]
  );

  return (
    <div className={styles.root}>
      <div className={styles.pcStickyBlock}>
        <PageTitle>{PAGES.career.title}</PageTitle>

        <div className={styles.spStickyBlock}>
          <CareerTabs years={years} activeYear={activeYear} />
        </div>
      </div>

      <CareerList careerItems={visibleCareerItems} />
    </div>
  );
}
