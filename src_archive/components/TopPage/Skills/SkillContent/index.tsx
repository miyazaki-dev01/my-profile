import React from "react";
import {
  itemStyle,
  iconStyle,
  iStyle,
  descriptionStyle,
  contentTitleStyle,
  ulStyle,
  textStyle,
} from "./style.css";

type Props = {
  icon: string;
  name: string;
  text: string;
};

export const SkillContent: React.FC<Props> = ({ icon, name, text }) => {
  return (
    <div className={itemStyle}>
      <div className={iconStyle}>
        <i className={`${icon} ${iStyle}`}></i>
      </div>

      <div className={descriptionStyle}>
        <span className={contentTitleStyle}>{name}</span>
        <ul className={ulStyle}>
          <li className={textStyle}>{text}</li>
        </ul>
      </div>
    </div>
  );
};
