import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
  onClick: () => void;
};

export const HeaderNavItem: React.FC<Props> = React.memo(
  ({ href, label, onClick }) => {
    return (
      <li>
        <Link href={href} onClick={onClick}>
          {label}
        </Link>
      </li>
    );
  }
);
