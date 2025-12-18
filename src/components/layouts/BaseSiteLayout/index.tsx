"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/layouts/Navigation";
import { useContentLoadingContext } from "@/contexts/ContentLoadingContext";
import { LoadingScreen } from "@/components/layouts/LoadingScreen";
import { FadeIn } from "@/components/elements/FadeIn";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { Copyright } from "@/components/elements/Copyright";
import * as styles from "./style.css";

type Props = {
  children: React.ReactNode;
};

export function BaseSiteLayout({ children }: Props) {
  const pathname = usePathname();
  const { isContentLoading } = useContentLoadingContext();
  const isDesktop = useIsDesktop();

  return (
    <>
      <Navigation />

      <FadeIn key={`${pathname}:${isContentLoading}`}>
        <main className={styles.main}>
          {isContentLoading ? <LoadingScreen spinnerSize={32} /> : children}
        </main>
      </FadeIn>

      {!isDesktop && (
        <footer className={styles.footer}>
          <Copyright style="mobileFooter" tag="small" />
        </footer>
      )}
    </>
  );
}
