"use client";

import React, {
  ReactNode,
  ReactElement,
  useEffect,
  useState,
  isValidElement,
} from "react";
import * as styles from "./style.css";

type Props = {
  in?: boolean;
  durationMs?: number;
  children: ReactNode;
};

const FADE_DURATION_MS = 600;

export function Fade({
  in: inProp = true,
  durationMs = FADE_DURATION_MS,
  children,
}: Props) {
  const [mounted, setMounted] = useState(inProp);
  const [visible, setVisible] = useState(false);

  const transitionStyle = { transitionDuration: `${durationMs}ms` };

  useEffect(() => {
    if (inProp) {
      setMounted(true);
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    setVisible(false);
    const t = window.setTimeout(() => setMounted(false), durationMs);
    return () => window.clearTimeout(t);
  }, [inProp]);

  if (!mounted) return null;

  const className = visible ? styles.visible : styles.hidden;

  // 単一要素なら className を合成
  if (isValidElement(children)) {
    const el = children as ReactElement<{
      className?: string;
      style?: React.CSSProperties;
    }>;
    return React.cloneElement(el, {
      className: [el.props.className, className].filter(Boolean).join(" "),
      style: { ...(el.props.style ?? {}), ...transitionStyle },
    });
  }

  return (
    <div className={className} style={transitionStyle}>
      {children}
    </div>
  );
}
