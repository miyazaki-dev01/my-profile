"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  sidebarAsideStyle,
  sidebardivStyle,
  iconStyle,
  navStyle,
  linksStyle,
  LinkStyle,
  contactStyle,
  contactLinkStyle,
  copyrightStyle,
  spMenuStyle,
  headerStyle,
  headerTransparentStyle,
  mobileMenuStyle,
  mobileMenuOpenStyle,
  mobileMenuDivStyle,
  mobileMenuNavStyle,
  linksTextStyle,
  homeLinkSpStyle,
  navItemsStyle,
  contactLinkSpStyle,
} from "./style.css";

const navItems = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // スクロールロック
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      {/* PC サイドバー */}
      <aside className={sidebarAsideStyle}>
        <div className={sidebardivStyle}>
          <Link href="/" className={iconStyle}>
            <Image
              src="/PortfolioAndBlog/homeIcon.svg"
              alt="homeIcon"
              width={50}
              height={50}
              unoptimized
            />
          </Link>
          <nav className={navStyle}>
            <div className={linksStyle}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  scroll={false}
                  className={LinkStyle}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={contactStyle}>
              <Link href="/contact" className={contactLinkStyle}>
                Contact
              </Link>
              <div className={copyrightStyle}>
                © 2025 Miyazaki All rights reserved.
              </div>
            </div>
          </nav>
        </div>
      </aside>

      {/* SP メニューバー */}
      <div className={spMenuStyle}>
        <header
          className={`${headerStyle} ${menuOpen ? headerTransparentStyle : ""}`}
        >
          <div>
            {!menuOpen && (
              <Link href="/" className={iconStyle}>
                <Image
                  src="/PortfolioAndBlog/homeIcon.svg"
                  alt="homeIcon"
                  width={35}
                  height={35}
                  unoptimized
                />
              </Link>
            )}
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center z-999"
          >
            <div className="space-y-1 relative">
              <div
                className={`h-0.5 w-5 bg-black transition-transform duration-300
                          ${
                            menuOpen ? "bg-white translate-y-1.5 rotate-45" : ""
                          }`}
              ></div>
              <div
                className={`h-0.5 w-5 bg-black transition-opacity duration-300
                          ${menuOpen ? "bg-white opacity-0" : "opacity-100"}`}
              ></div>
              <div
                className={`h-0.5 w-5 bg-black transition-transform duration-300
                          ${
                            menuOpen
                              ? "bg-white -translate-y-1.5 -rotate-45"
                              : ""
                          }`}
              ></div>
            </div>
          </div>
        </header>

        <div
          className={`${mobileMenuStyle} ${
            menuOpen ? mobileMenuOpenStyle : ""
          }`}
        >
          <div className={mobileMenuDivStyle}>
            <nav className={mobileMenuNavStyle}>
              <Link
                href="/"
                className={homeLinkSpStyle}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <div className={navItemsStyle}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    scroll={false}
                    onClick={() => setMenuOpen(false)}
                    className={linksTextStyle}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className={contactLinkSpStyle}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
