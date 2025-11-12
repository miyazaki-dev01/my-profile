"use client";

import React, { useState, useEffect } from "react";
import { titleDivStyle, PortfolioTitleStyle, BorderStyle } from "./style.css";
import breakpoints from "@/theme/breakpoints";

interface ListPageTitleProps {
  title: string;
  isBorder?: boolean;
}

const ListPageTitle: React.FC<ListPageTitleProps> = ({
  title,
  isBorder = true,
}) => {
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(window.innerWidth <= breakpoints.desktop);
    };

    handleResize(); // 初回判定
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // div を付けるかどうか分岐
  if (isTabletOrSmaller) {
    return <h1 className={PortfolioTitleStyle}>{title}</h1>;
  }

  return (
    <div
      className={`w-[calc(100%_+_48px)] ${titleDivStyle} ${
        isBorder ? BorderStyle : ""
      }`}
    >
      <h1 className={PortfolioTitleStyle}>{title}</h1>
    </div>
  );
};

export default ListPageTitle;
