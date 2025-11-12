import React from "react";
import { titleStyle, plusButtonStyle, minusButtonStyle } from "./style.css";

type Props = {
  title: string;
};

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <>
      <button
        className={`hs-accordion-toggle ${titleStyle}`}
        aria-expanded="false"
        aria-controls="hs-basic-active-bordered-collapse-one"
      >
        {title}
        <svg
          className={`hs-accordion-active:hidden ${plusButtonStyle}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
        <svg
          className={`hs-accordion-active:block hidden ${minusButtonStyle}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14"></path>
        </svg>
      </button>
    </>
  );
};
