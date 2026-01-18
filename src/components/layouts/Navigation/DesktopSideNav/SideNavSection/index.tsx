import React from "react";
import * as styles from "./style.css";

type Props = {
  children: React.ReactNode;
};

export function SideNavSection({ children }: Props) {
  return <ul className={styles.sidebarSection}>{children}</ul>;
}
