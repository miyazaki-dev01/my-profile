import React from "react";
import type { CareerLatestYear } from "@/features/career/types/career";
import { NavLink } from "@/components/elements/Link/NavLink";
import { Logo } from "@/components/elements/Logo";
import { SideNavSection } from "@/components/layouts/Navigation/DesktopSideNav/SideNavSection";
import { SideNavItem } from "@/components/layouts/Navigation/DesktopSideNav/SideNavItem";
import { PAGES } from "@/constants/pages";
import { NAV_ITEM } from "@/constants/nav";
import { buildCareerPath } from "@/features/career/utils/careerPath";
import { Copyright } from "@/components/elements/Copyright";
import * as styles from "./style.css";

type Props = {
  careerLatestYear?: CareerLatestYear;
};

export function DesktopSideNav({ careerLatestYear }: Props) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInner}>
        <NavLink href={PAGES.profile.path} className={styles.sidebarLogo}>
          <Logo style="sideNav" fill="black" skeleton fadeIn />
        </NavLink>

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
                href={buildCareerPath(careerLatestYear)}
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

        <Copyright style="sideNav" />
      </div>
    </aside>
  );
}
