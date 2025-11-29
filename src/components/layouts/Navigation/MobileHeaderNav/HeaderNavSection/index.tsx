import React from "react";
import * as styles from "./style.css";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export const HeaderNavSection: React.FC<Props> = React.memo(({ children }) => {
  return <ul className={styles.headerNavSection}>{children}</ul>;
});
