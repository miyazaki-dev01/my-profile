import React from "react";
import * as styles from "./style.css";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const SideNavSection: React.FC<Props> = React.memo(({ children }) => {
  return <ul className={styles.sidebarSection}>{children}</ul>;
});
