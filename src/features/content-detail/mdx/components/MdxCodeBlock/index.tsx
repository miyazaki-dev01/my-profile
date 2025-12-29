"use client";

import React, { useEffect, useRef, useState } from "react";
import { copyToClipboard } from "@/features/content-detail/mdx/components/MdxCodeBlock/copyToClipboard";
import { FaRegCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import * as styles from "./style.css";

type Props = React.ComponentPropsWithoutRef<"figure">;

const extractText = (node: React.ReactNode): string => {
  if (typeof node === "string") return node.trim();
  if (Array.isArray(node)) return node.map(extractText).join("").trim();
  if (React.isValidElement(node)) return extractText(node.props.children);
  return "";
};

export function MdxCodeBlock({ children, className, ...props }: Props) {
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // copied 表示を戻すタイマー
  const timerRef = useRef<number | null>(null);
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  // figcaption と pre を安全に分離
  const childArray = React.Children.toArray(children);
  const caption = childArray.find(
    (child) => React.isValidElement(child) && child.type === "figcaption"
  ) as React.ReactElement | undefined;
  const pre = childArray.find(
    (child) => React.isValidElement(child) && child.type === "pre"
  ) as React.ReactElement | undefined;

  const isPrettyCodeFigure = Object.prototype.hasOwnProperty.call(
    props,
    "data-rehype-pretty-code-figure"
  );

  // CodeBlock以外のfigureはそのまま返す
  if (!pre || !isPrettyCodeFigure) {
    return (
      <figure
        {...props}
        className={[styles.wrapper, className].filter(Boolean).join(" ")}
      >
        {children}
      </figure>
    );
  }

  // ファイル名抽出
  const filename = caption ? extractText(caption.props.children) : "";

  // クリップボードコピー処理
  const handleCopy = async () => {
    const text = wrapperRef.current?.querySelector("pre")?.innerText ?? "";
    if (!text) return;

    const ok = await copyToClipboard(text);
    if (!ok) return;

    setCopied(true);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setCopied(false);
      timerRef.current = null;
    }, 1000);
  };

  return (
    <figure
      {...props}
      className={[styles.wrapper, className].filter(Boolean).join(" ")}
    >
      {filename &&
        caption &&
        React.cloneElement(caption, {
          children: <div className={styles.fileLabel}>{filename}</div>,
        })}

      <div ref={wrapperRef} className={styles.preWrapper}>
        {pre}

        <div className={styles.copyWrapper}>
          <button type="button" onClick={handleCopy} className={styles.copyBtn}>
            {copied ? (
              <FaCheck className={styles.checkIconStyle} />
            ) : (
              <FaRegCopy className={styles.copyIconStyle} />
            )}
          </button>
        </div>
      </div>
    </figure>
  );
}
