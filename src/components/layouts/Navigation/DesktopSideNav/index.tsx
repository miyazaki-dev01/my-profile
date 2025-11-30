import React from "react";
import Link from "next/link";
import { Logo } from "@/components/elements/Logo";
import { SideNavSection } from "@/components/layouts/Navigation/DesktopSideNav/SideNavSection";
import { SideNavItem } from "@/components/layouts/Navigation/DesktopSideNav/SideNavItem";
import { PATH } from "@/constants/paths";
import { NAV_ITEM } from "@/constants/nav";
import { COPYRIGHT } from "@/constants/copyright";
import * as styles from "./style.css";

export const DesktopSideNav: React.FC = React.memo(() => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInner}>
        <Link href={PATH.profile} className={styles.sidebarLogo}>
          <Logo variant="sideNav" fill="black" skeleton fageIn />
        </Link>
        <nav className={styles.sidebarNav}>
          <div className={styles.sidebarSectionWrapper}>
            <SideNavSection>
              <SideNavItem
                href={NAV_ITEM.profile.path}
                label={NAV_ITEM.profile.label}
              />
            </SideNavSection>
            <SideNavSection>
              <SideNavItem
                href={NAV_ITEM.portfolio.path}
                label={NAV_ITEM.portfolio.label}
              />
              <SideNavItem
                href={NAV_ITEM.blog.path}
                label={NAV_ITEM.blog.label}
              />
            </SideNavSection>
            <SideNavSection>
              <SideNavItem
                href={NAV_ITEM.skill.path}
                label={NAV_ITEM.skill.label}
              />
              <SideNavItem
                href={NAV_ITEM.career.path}
                label={NAV_ITEM.career.label}
              />
            </SideNavSection>
          </div>
          <SideNavSection>
            <SideNavItem
              href={NAV_ITEM.contact.path}
              label={NAV_ITEM.contact.label}
            />
          </SideNavSection>
        </nav>
        <div className={styles.sidebarCopyright}>{COPYRIGHT}</div>
      </div>
    </aside>
  );
});
