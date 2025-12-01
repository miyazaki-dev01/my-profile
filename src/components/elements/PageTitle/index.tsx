import React from "react";
import * as styles from "./style.css";

type Props = {
  children: React.ReactNode;
};

export function PageTitle({ children }: Props) {
  return <h1 className={styles.pageTitle}>{children}</h1>;
}
