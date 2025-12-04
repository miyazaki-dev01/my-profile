"use client";

import React from "react";
import { Navigation } from "@/components/layouts/Navigation";
import { useContentLoadingContext } from "@/contexts/ContentLoadingContext";
import { LoadingScreen } from "@/components/layouts/LoadingScreen";
import { FadeIn } from "@/components/elements/FadeIn";
import * as styles from "./style.css";

type Props = {
  children: React.ReactNode;
};

export function BaseSiteLayout({ children }: Props) {
  const { isContentLoading } = useContentLoadingContext();

  return (
    <>
      <Navigation />

      <FadeIn key={isContentLoading ? "loading" : "loaded"}>
        {isContentLoading ? (
          <LoadingScreen />
        ) : (
          <main className={styles.main}>{children}</main>
        )}
      </FadeIn>
    </>
  );
}
