import React from "react";
import { buttonBase, buttonColor } from "../style.css";
import * as styles from "./style.css";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function ExternalLinkButton({ href, children }: Props) {
  return (
    <a
      href={href}
      className={`${buttonBase} ${buttonColor} ${styles.externalLinkButton}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
}
