"use client";

import React, { useRef, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import * as styles from "./style.css";

export default function CodeBlock({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [copied, setCopied] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // ---- figcaption と pre を安全に分離 ----
  const childArray = React.Children.toArray(children);
  const caption = childArray.find(
    (child) => React.isValidElement(child) && child.type === "figcaption"
  ) as React.ReactElement | undefined;
  const pre = childArray.find(
    (child) => React.isValidElement(child) && child.type === "pre"
  ) as React.ReactElement | undefined;

  // ---- ファイル名抽出 ----
  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node.trim();
    if (Array.isArray(node)) return node.map(extractText).join("").trim();
    if (React.isValidElement(node)) return extractText(node.props.children);
    return "";
  };
  const filename = caption ? extractText(caption.props.children) : "";

  // ---- コピー処理 ----
  const handleCopy = async () => {
    if (!wrapperRef.current) return;
    try {
      const text = wrapperRef.current.querySelector("pre")?.innerText ?? "";
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (e) {
      console.error("コピー失敗", e);
    }
  };

  return (
    <figure {...props} className={styles.wrapper}>
      {/* ファイル名がある場合のみキャプションを描画 */}
      {filename &&
        caption &&
        React.cloneElement(caption, {
          children: (
            <div className={styles.captionContent}>
              <span className={styles.filename}>{filename}</span>
            </div>
          ),
        })}
      <div ref={wrapperRef} className={styles.preWrapper}>
        {pre}
      </div>
      <div className={styles.copyWrapper}>
        <button
          onClick={handleCopy}
          className={styles.copyBtn}
          aria-label="コピー"
        >
          {copied ? (
            <FaCheck className={styles.checkIconStyle} />
          ) : (
            <FiCopy className={styles.copyIconStyle} />
          )}
        </button>
      </div>
    </figure>
  );
}
