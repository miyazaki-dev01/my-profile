import React from "react";
import {
  ProfileStyle,
  ProfileContentStyle,
  THEME_COLOR,
} from "./style.css";

type Props = {
  id?: string;
  themeColor: keyof typeof THEME_COLOR;
  children: React.ReactNode;
};

export const BasicLayout: React.FC<Props> = ({
  id = "",
  children,
  themeColor,
}) => {
  return (
    <div id={id} className={ProfileStyle[themeColor]}>
      <div className={ProfileContentStyle}>{children}</div>
    </div>
  );
};
