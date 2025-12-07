"use client";

import React from "react";
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
  const { isContentLoading } = useContentLoadingContext();
  const isDesktop = useIsDesktop();

  return (
    <>
      <Navigation />

      <FadeIn key={isContentLoading ? "loading" : "loaded"}>
        {isContentLoading ? (
          <LoadingScreen spinnerSize={32} />
        ) : (
          <main className={styles.main}>{children}</main>
        )}
      </FadeIn>

      {!isDesktop && (
        <footer className={styles.footer}>
          <Copyright style="mobileFooter" tag="small" />
        </footer>
      )}
    </>
  );
}
