import React from "react";
import {
  containerStyle,
  lineStyle,
  contentStyle,
  dateStyle,
  titleStyle,
  textStyle,
} from "./style.css";

type Props = {
  date: string;
  title: string;
  text: string;
};

export const CareerContent: React.FC<Props> = ({ date, title, text }) => {
  return (
    <>
      <div className={containerStyle}>
        <div className={lineStyle}></div>
        <div className={contentStyle}>
          <div className={dateStyle}>{date}</div>
          <div className={titleStyle}>{title}</div>
          <div className={textStyle}>{text}</div>
        </div>
      </div>
    </>
  );
};
