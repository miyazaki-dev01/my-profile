import React from "react";
import { iconStyle, iconContainer, circleStyle } from "./style.css";

export const CareerIcon: React.FC = () => {
  return (
    <>
      <div className={iconStyle}>
        <div className={iconContainer}>
          <div className={circleStyle}></div>
        </div>
      </div>
    </>
  );
};
