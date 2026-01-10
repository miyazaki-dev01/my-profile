"use client";

import React from "react";
import type { CareerLatestYear } from "@/features/career/types/career";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layouts/Navigation";
import { useContentLoadingContext } from "@/contexts/ContentLoadingContext";
import { LoadingScreen } from "@/components/layouts/LoadingScreen";
import { Fade } from "@/components/elements/Fade";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { Copyright } from "@/components/elements/Copyright";
import * as styles from "./style.css";

type Props = {
  children: React.ReactNode;
  careerLatestYear?: CareerLatestYear;
};

export function BaseSiteLayout({ children, careerLatestYear }: Props) {
  const pathname = usePathname();
  const { isContentLoading } = useContentLoadingContext();
  const isDesktop = useIsDesktop();

  return (
    <>
      <Navigation careerLatestYear={careerLatestYear} />

      {isContentLoading ? (
        <main className={styles.main}>
          <LoadingScreen spinnerSize={32} />
        </main>
      ) : (
        <Fade key={pathname}>
          <main className={styles.main}>{children}</main>
        </Fade>
      )}

      {!isDesktop && (
        <footer className={styles.footer}>
          <Copyright style="mobileFooter" tag="small" />
        </footer>
      )}
    </>
  );
}
