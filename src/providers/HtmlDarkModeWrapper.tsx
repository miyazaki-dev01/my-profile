"use client";

import React from "react";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export function HtmlDarkModeWrapper({ children }: Props) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    return () => {
      root.classList.remove("dark");
    };
  }, []);

  return <>{children}</>;
}
