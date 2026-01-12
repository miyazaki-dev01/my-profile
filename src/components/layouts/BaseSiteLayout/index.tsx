"use client";

import React from "react";
import type { CareerLatestYear } from "@/features/career/types/career";
import { usePathname } from "next/navigation";
import { PATH } from "@/constants/paths";
import { Navigation } from "@/components/layouts/Navigation";
import { useContentLoadingContext } from "@/contexts/ContentLoadingContext";
import { LoadingScreen } from "@/components/layouts/LoadingScreen";
import { Fade } from "@/components/elements/Fade";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { ContactRouteBoundary } from "@/features/contact/components/ContactRouteBoundary";
import { Copyright } from "@/components/elements/Copyright";
import * as styles from "./style.css";

type Props = {
  children: React.ReactNode;
  careerLatestYear?: CareerLatestYear;
};

/**
 * 全ページ共通の枠組みを提供する。
 * - Navigation を常時表示。
 * - 画像などの読み込み完了まではローディングスピナーを表示。
 * - 読み込み後は route 変更に合わせてフェード表示。
 * - Fade の再マウントで contact のフォーム状態が消えないよう、/contact 配下だけ Provider を外側で保持。
 * - フッターはモバイルのみ表示。
 */
export function BaseSiteLayout({ children, careerLatestYear }: Props) {
  const pathname = usePathname();
  const isContactRoute = pathname?.startsWith(PATH.contact);
  const { isContentLoading } = useContentLoadingContext();
  const isDesktop = useIsDesktop();

  return (
    <>
      <Navigation careerLatestYear={careerLatestYear} />

      <ContactRouteBoundary isContactRoute={isContactRoute}>
        {isContentLoading ? (
          <main className={styles.main}>
            <LoadingScreen spinnerSize={32} />
          </main>
        ) : (
          <Fade key={pathname}>
            <main className={styles.main}>{children}</main>
          </Fade>
        )}
      </ContactRouteBoundary>

      {!isDesktop && (
        <footer className={styles.footer}>
          <Copyright style="mobileFooter" tag="small" />
        </footer>
      )}
    </>
  );
}
