"use client";

import React from "react";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import * as styles from "./style.css";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

type Props = {
  targetId: string;
};

export function TableOfContents({ targetId }: Props) {
  const isDesktop = useIsDesktop();
  const [items, setItems] = React.useState<TocItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = document.getElementById(targetId);
    if (!root) return;

    const headings = Array.from(
      root.querySelectorAll<HTMLHeadingElement>("h2[id], h3[id]")
    );

    const toc = headings
      .map((el) => {
        const id = el.id?.trim();
        const text = (el.textContent ?? "").trim();
        const level = el.tagName === "H2" ? 2 : 3;
        if (!id || !text) return null;
        return { id, text, level };
      })
      .filter((v): v is TocItem => v !== null);

    setItems(toc);
  }, [targetId]);

  if (isDesktop) return null;
  if (items.length === 0) return null;

  const handleToggle = () => {
    setIsOpen((v) => !v);
  };

  const maxHeight = isOpen ? `${innerRef.current?.scrollHeight ?? 0}px` : "0px";

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const el = document.getElementById(id);
      if (!el) return;

      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    };

  return (
    <nav
      aria-label="目次"
      className={styles.toc}
      data-open={isOpen ? "true" : "false"}
    >
      <button
        type="button"
        className={styles.toggleButton}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.triangle} aria-hidden="true" />
        <span className={styles.title}>目次</span>
      </button>

      <div className={styles.panel} style={{ maxHeight }}>
        <div className={styles.panelInner} ref={innerRef}>
          <ul className={styles.list}>
            {items.map((item) => (
              <li
                key={item.id}
                className={item.level === 3 ? styles.itemH3 : styles.itemH2}
              >
                <a
                  href={`#${item.id}`}
                  className={styles.link}
                  onClick={handleClick(item.id)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
