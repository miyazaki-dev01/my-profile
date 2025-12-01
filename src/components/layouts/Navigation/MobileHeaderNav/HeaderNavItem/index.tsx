import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  onClick: () => void;
};

export function HeaderNavItem({ href, label, onClick }: Props) {
  return (
    <li>
      <Link href={href} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
}
