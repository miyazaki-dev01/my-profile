import React from "react";
import { contentstyle, iconStyle, textStyle } from "./style.css";

type Props = {
  content: string;
};

export const WorkingItem: React.FC<Props> = ({ content }) => {
  return (
    <div className={contentstyle}>
      <span className={iconStyle}></span>
      <span className={textStyle}>{content}</span>
    </div>
  );
};
