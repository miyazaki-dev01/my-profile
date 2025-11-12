import React from "react";
import { qualificationLiStyle, qualificationSpanStyle } from "./style.css";

type Props = {
  text: string;
};

export const QualificationContent: React.FC<Props> = ({ text }) => {
  return (
    <li className={`${qualificationLiStyle}`}>
      <span className={`${qualificationSpanStyle}`}>{text}</span>
    </li>
  );
};
