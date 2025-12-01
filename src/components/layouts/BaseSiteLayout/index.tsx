import React from "react";
import * as styles from "./style.css";

type Props = {
  children: React.ReactNode;
};

export function BaseSiteLayout({ children }: Props) {
  return <main className={styles.main}>{children}</main>;
}
