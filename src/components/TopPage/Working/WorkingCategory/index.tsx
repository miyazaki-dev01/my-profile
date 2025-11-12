import React from "react";
import { categoryIconStyle } from "./style.css";

type Props = {
  content: string;
};

export const WorkingContent: React.FC<Props> = ({ content }) => {
  return (
    <>
      <span className={categoryIconStyle}>{content}</span>
    </>
  );
};
