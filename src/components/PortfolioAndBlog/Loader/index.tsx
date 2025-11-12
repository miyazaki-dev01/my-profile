import React from "react";
import { loaderPositionStyle, ringLoader } from "./style.css";

export const Loader: React.FC = () => {
  return (
    <div className={loaderPositionStyle}>
      <div className={ringLoader}></div>
    </div>
  );
};

export default Loader;
