import React from "react";
import { FooterStyle, FooterTextStyle } from "./style.css";

export const Footer: React.FC = () => {
  return (
    <>
      <div className={FooterStyle}>
        <div className={FooterTextStyle}>
          <span>© 2025 Miyazaki All rights reserved.</span>
        </div>
      </div>
    </>
  );
};
