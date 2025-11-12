"use client";

import React, { useRef } from "react";
import {
  headerStyle,
  navStyle,
  iconStyle,
  hoemButtonStyle,
  menueButtonStyle,
  openButton,
  closeButton,
  contentStyle,
  contentItemStyle,
} from "./style.css";
import { NavbarContent } from "./NavbarContent";
import breakpoints from "@/theme/breakpoints";
import Link from "next/link";

const NAVBAR_ITEMS: Omit<
  React.ComponentProps<typeof NavbarContent>,
  "onClick"
>[] = [
  {
    href: "#Home",
    name: "Home",
  },
  {
    href: "#Portfolio",
    name: "Portfolio",
    submenuHrefAll: "/portfolio",
  },
  {
    href: "#Blog",
    name: "Blog",
    submenuHrefAll: "/blog",
  },
  {
    href: "#Skills",
    name: "Skills",
  },
  {
    href: "#Career",
    name: "Career",
  },
  {
    href: "#Working",
    name: "Works",
  },
] as const;

export const Navbar: React.FC = () => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleLinkClick = () => {
    if (window.innerWidth < breakpoints.mobile) {
      closeButtonRef.current?.click();
    }
  };

  return (
    <header className={headerStyle}>
      <nav className={navStyle}>
        {/* ホームアイコン */}
        <div className={iconStyle}>
          <Link className={hoemButtonStyle} href="#Home">
            Miyazaki&apos;s profile
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              ref={closeButtonRef}
              className={`hs-collapse-toggle ${menueButtonStyle}`}
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                className={`hs-collapse-open:hidden ${openButton}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="0" x2="24" y1="4" y2="4" />
                <line x1="0" x2="24" y1="12" y2="12" />
                <line x1="0" x2="24" y1="20" y2="20" />
              </svg>
              <svg
                className={`hs-collapse-open:block hidden ${closeButton}`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 4 4 20" />
                <path d="m4 4 16 16" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>

        {/* メニューボタン */}
        <div
          id="hs-navbar-example"
          className={`hidden hs-collapse ${contentStyle}`}
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className={contentItemStyle}>
            {NAVBAR_ITEMS.map((item, index) => (
              <NavbarContent key={index} {...item} onClick={handleLinkClick} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
