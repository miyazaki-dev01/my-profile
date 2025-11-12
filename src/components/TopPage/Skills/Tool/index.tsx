import React from "react";
import {
  imageStyle,
  iStyle,
  contentsStyle,
  descriptionStyle,
  textStyle,
} from "./style.css";

type Props = {
  icon: string;
  name: string;
  image: boolean;
};

export const ToolContent: React.FC<Props> = ({ icon, name, image }) => {
  return (
    <div className={contentsStyle}>
      <div>
        {image ? (
          <img src={icon} alt="" className={`${imageStyle}`} />
        ) : (
          <i className={`${icon} ${iStyle}`}></i>
        )}
      </div>
      <div className={descriptionStyle}>
        <span className={textStyle}>{name}</span>
      </div>
    </div>
  );
};
