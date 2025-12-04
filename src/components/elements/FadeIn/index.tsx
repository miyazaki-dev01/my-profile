import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import * as styles from "./style.css";

type Props = { children: ReactElement };

export function FadeIn({ children }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const className = visible ? styles.visible : styles.hidden;
  return React.cloneElement(children, {
    className: [children.props.className, className].filter(Boolean).join(" "),
  });
}
