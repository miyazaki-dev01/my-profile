"use client";

import React from "react";
import Link from "next/link";
import {
  itemStyle,
  dropdownStyle,
  dropdownButtonStyle,
  dropdownIconStyle,
  dropdownMenuStyle,
  dropdownColStyle,
  dropdownLinkStyle,
} from "./style.css";

type Props = {
  href: string;
  name: string;
  onClick: () => void;
  submenuHrefAll?: string;
};

export const NavbarContent: React.FC<Props> = ({
  href,
  name,
  onClick,
  submenuHrefAll,
}) => {
  return (
    <>
      {submenuHrefAll ? (
        <div
          className={`hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]  [--is-collapse:true] sm:[--is-collapse:false] ${dropdownStyle}`}
        >
          <button
            id="hs-mega-menu"
            type="button"
            className={`hs-dropdown-toggle ${dropdownButtonStyle}`}
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Mega Menu"
          >
            <div>{name}</div>
            <svg
              className={`hs-dropdown-open:-rotate-180 ${dropdownIconStyle}`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            className={`hs-dropdown-menu hs-dropdown-open:opacity-100 opacity-0 hidden ${dropdownMenuStyle}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-mega-menu"
          >
            <div className={dropdownColStyle}>
              <Link className={dropdownLinkStyle} href={href} onClick={onClick}>
                New
              </Link>
              <Link
                className={dropdownLinkStyle}
                href={submenuHrefAll}
                onClick={onClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                All
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Link className={itemStyle} href={href} onClick={onClick}>
          {name}
        </Link>
      )}
    </>
  );
};
