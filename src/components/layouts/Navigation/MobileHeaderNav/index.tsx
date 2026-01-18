"use client";

import type { CareerLatestYear } from "@/features/career/types/career";
import { useState } from "react";
import { NavLink } from "@/components/elements/Link/NavLink";
import { useInitialLoadingContext } from "@/contexts/InitialLoadingContext";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { Fade } from "@/components/elements/Fade";
import { LoadingScreen } from "@/components/layouts/LoadingScreen";
import { Logo } from "@/components/elements/Logo";
import { NAV_ITEM } from "@/constants/nav";
import { buildCareerPath } from "@/features/career/utils/careerPath";
import { HeaderNavSection } from "@/components/layouts/Navigation/MobileHeaderNav/HeaderNavSection";
import { HeaderNavItem } from "@/components/layouts/Navigation/MobileHeaderNav/HeaderNavItem";
import * as styles from "./style.css";

type Props = {
  careerLatestYear?: CareerLatestYear;
};

export function MobileHeaderNav({ careerLatestYear }: Props) {
  const { isInitialLoading } = useInitialLoadingContext();
  const [menuOpen, setMenuOpen] = useState(false);

  // スクロールロック
  useBodyScrollLock(menuOpen);

  return (
    <>
      {/* 固定ヘッダー */}
      <header
        className={`${styles.headerBase} ${menuOpen ? styles.headerOpen : ""}`}
      >
        <div>
          {!menuOpen && (
            <NavLink href={NAV_ITEM.profile.path}>
              <Logo style="headerNav" fill="black" />
            </NavLink>
          )}
        </div>
        <div
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={styles.menuIconStack}>
            <div
              className={`${styles.bar} ${styles.transformable} ${
                menuOpen ? styles.openTop : ""
              }`}
            />
            <div
              className={`${styles.bar} ${styles.fadeable} ${
                menuOpen ? styles.openMiddle : ""
              }`}
            />
            <div
              className={`${styles.bar} ${styles.transformable} ${
                menuOpen ? styles.openBottom : ""
              }`}
            />
          </div>
        </div>
      </header>

      {/* オーバーレイメニュー */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
      >
        <div className={`${styles.panel} ${menuOpen ? styles.panelOpen : ""}`}>
          {isInitialLoading ? (
            <LoadingScreen spinnerSize={26} spinnerColor="white" />
          ) : (
            <Fade key={isInitialLoading ? "loading" : "loaded"}>
              <nav
                className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
              >
                <div className={styles.headerSectionWrapper}>
                  <HeaderNavSection>
                    <HeaderNavItem
                      href={NAV_ITEM.profile.path}
                      label={NAV_ITEM.profile.label}
                      onClick={() => setMenuOpen(false)}
                    />
                  </HeaderNavSection>
                  <HeaderNavSection>
                    <HeaderNavItem
                      href={NAV_ITEM.portfolio.path}
                      label={NAV_ITEM.portfolio.label}
                      onClick={() => setMenuOpen(false)}
                    />
                    <HeaderNavItem
                      href={NAV_ITEM.blog.path}
                      label={NAV_ITEM.blog.label}
                      onClick={() => setMenuOpen(false)}
                    />
                  </HeaderNavSection>
                  <HeaderNavSection>
                    <HeaderNavItem
                      href={NAV_ITEM.skill.path}
                      label={NAV_ITEM.skill.label}
                      onClick={() => setMenuOpen(false)}
                    />
                    <HeaderNavItem
                      href={buildCareerPath(careerLatestYear)}
                      label={NAV_ITEM.career.label}
                      onClick={() => setMenuOpen(false)}
                    />
                  </HeaderNavSection>
                </div>
                <HeaderNavSection>
                  <HeaderNavItem
                    href={NAV_ITEM.contact.path}
                    label={NAV_ITEM.contact.label}
                    onClick={() => setMenuOpen(false)}
                  />
                </HeaderNavSection>
              </nav>
            </Fade>
          )}
        </div>
      </div>
    </>
  );
}
