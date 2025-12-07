"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useInitialLoadingContext } from "@/contexts/InitialLoadingContext";
import { FadeIn } from "@/components/elements/FadeIn";
import { LoadingScreen } from "@/components/layouts/LoadingScreen";
import { Logo } from "@/components/elements/Logo";
import { PAGES } from "@/constants/pages";
import { NAV_ITEM } from "@/constants/nav";
import { HeaderNavSection } from "@/components/layouts/Navigation/MobileHeaderNav/HeaderNavSection";
import { HeaderNavItem } from "@/components/layouts/Navigation/MobileHeaderNav/HeaderNavItem";
import * as styles from "./style.css";

export function MobileHeaderNav() {
  const { isInitialLoading } = useInitialLoadingContext();
  const [menuOpen, setMenuOpen] = useState(false);

  // スクロールロック
  useEffect(() => {
    const body = document.body;
    if (menuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* 固定ヘッダー */}
      <header
        className={`${styles.headerBase} ${menuOpen ? styles.headerOpen : ""}`}
      >
        <div>
          {!menuOpen && (
            <Link href={PAGES.profile.path}>
              <Logo style="headerNav" fill="black" />
            </Link>
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
          <FadeIn key={isInitialLoading ? "loading" : "loaded"}>
            {isInitialLoading ? (
              <LoadingScreen spinnerSize={26} spinnerColor="white" />
            ) : (
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
                      href={NAV_ITEM.career.path}
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
            )}
          </FadeIn>
        </div>
      </div>
    </>
  );
}
