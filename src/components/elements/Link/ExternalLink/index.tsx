import React from "react";

type Props = {
  href: string | undefined;
  className?: string;
  children: React.ReactNode;
};

export function ExternalLink({ href, className, children }: Props) {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
    >
      {children}
    </a>
  );
}
