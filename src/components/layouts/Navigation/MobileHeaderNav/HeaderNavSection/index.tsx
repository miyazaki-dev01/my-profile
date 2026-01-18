import React from "react";
import * as styles from "./style.css";

type Props = {
  children: React.ReactNode;
};

export function HeaderNavSection({ children }: Props) {
  return <ul className={styles.headerNavSection}>{children}</ul>;
}
