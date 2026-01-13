import React from "react";
import { buttonBase, buttonColor } from "../style.css";

type Props = {
  variant?: keyof typeof buttonColor;
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function ExternalLinkButton({
  variant = "black",
  href,
  className,
  children,
}: Props) {
  return (
    <a
      href={href}
      className={`${buttonBase} ${buttonColor[variant]} ${className ?? ""}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>{children}</span>
    </a>
  );
}
