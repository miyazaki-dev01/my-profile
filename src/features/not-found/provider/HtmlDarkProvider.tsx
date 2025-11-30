"use client";

import React, { useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HtmlDarkProvider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    return () => {
      root.classList.remove("dark");
    };
  }, []);

  return <>{children}</>;
};
