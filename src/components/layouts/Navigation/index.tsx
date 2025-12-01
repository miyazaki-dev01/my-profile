import React from "react";
import { DesktopSideNav } from "@/components/layouts/Navigation/DesktopSideNav";
import { MobileHeaderNav } from "@/components/layouts/Navigation/MobileHeaderNav";
import * as styles from "./style.css";

export function Navigation() {
  return (
    <>
      <div className={styles.desktopSideNav}>
        <DesktopSideNav />
      </div>
      <div className={styles.mobileHeaderNav}>
        <MobileHeaderNav />
      </div>
    </>
  );
}
