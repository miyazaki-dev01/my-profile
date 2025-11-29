"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/elements/Logo";
import { PATH } from "@/constants/paths";
import { NAV_ITEM } from "@/constants/nav";
import { HeaderNavSection } from "@/components/layouts/Navigation/MobileHeaderNav/HeaderNavSection";
import { HeaderNavItem } from "@/components/layouts/Navigation/MobileHeaderNav/HeaderNavItem";
import * as styles from "./style.css";

export const MobileHeaderNav: React.FC = React.memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);

  // スクロールロック
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      {/* 固定ヘッダー */}
      <header
        className={`${styles.headerBase} ${menuOpen ? styles.headerOpen : ""}`}
      >
        <div>
          {!menuOpen && (
            <Link href={PATH.profile}>
              <Logo size={36} />
            </Link>
          )}
        </div>
        <div
          role="button"
          tabIndex={0}
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
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <div className={styles.headerSectionWrapper}>
              <HeaderNavSection>
                <HeaderNavItem
                  href={NAV_ITEM.profile.path}
                  label={NAV_ITEM.profile.lavel}
                  onClick={() => setMenuOpen(false)}
                />
              </HeaderNavSection>
              <HeaderNavSection>
                <HeaderNavItem
                  href={NAV_ITEM.portfolio.path}
                  label={NAV_ITEM.portfolio.lavel}
                  onClick={() => setMenuOpen(false)}
                />
                <HeaderNavItem
                  href={NAV_ITEM.blog.path}
                  label={NAV_ITEM.blog.lavel}
                  onClick={() => setMenuOpen(false)}
                />
              </HeaderNavSection>
              <HeaderNavSection>
                <HeaderNavItem
                  href={NAV_ITEM.skill.path}
                  label={NAV_ITEM.skill.lavel}
                  onClick={() => setMenuOpen(false)}
                />
                <HeaderNavItem
                  href={NAV_ITEM.career.path}
                  label={NAV_ITEM.career.lavel}
                  onClick={() => setMenuOpen(false)}
                />
              </HeaderNavSection>
            </div>
            <HeaderNavSection>
              <HeaderNavItem
                href={NAV_ITEM.contact.path}
                label={NAV_ITEM.contact.lavel}
                onClick={() => setMenuOpen(false)}
              />
            </HeaderNavSection>
          </nav>
        </div>
      </div>
    </>
  );
});
