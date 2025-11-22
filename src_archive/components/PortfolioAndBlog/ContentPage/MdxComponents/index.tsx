import React from "react";
import type { HTMLAttributes } from "react";
import { CustomImage } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents/CustomImage";
import { OgpCard } from "@/components/PortfolioAndBlog/ContentPage/MdxComponents/OgpCard";
import * as styles from "./style.css";
import type { MDXComponents } from "next-mdx-remote-client/rsc";
import CodeBlock from "@/components/PortfolioAndBlog/ContentPage/MdxComponents/CodeBlock";
import { FiExternalLink } from "react-icons/fi";

type CustomImageProps = React.ComponentProps<typeof CustomImage>;
type OgpCardProps = React.ComponentProps<typeof OgpCard>;
type CodeProps = HTMLAttributes<HTMLElement> & {
  "data-theme"?: string;
};

export const MdxComponents = (
  images: CustomImageProps["images"],
  ogpMap: Record<string, OgpCardProps["ogp"]>
): MDXComponents => ({
  // ---- MDX全体のラッパー ----
  wrapper: ({ children }) => <div className={styles.wrapper}>{children}</div>,

  // ---- 見出し ----
  h2: (props) => <h2 className={styles.h2} {...props} />,
  h3: (props) => <h3 className={styles.h3} {...props} />,
  h4: (props) => <h4 className={styles.h4} {...props} />,

  // ---- テキスト要素 ----
  p: (props) => <p className={styles.p} {...props} />,
  strong: (props) => <strong className={styles.strong} {...props} />,
  blockquote: (props) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
  a: (props) => (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      {...props}
    >
      {props.children}
      <FiExternalLink className={styles.aIcon} />
    </a>
  ),
  code: (props: CodeProps) => {
    const isCodeBlock = !!props["data-theme"]; // これがあればコードブロックなため、スタイルを適用しない
    return (
      <code
        className={isCodeBlock ? undefined : styles.inlineCode}
        {...props}
      />
    );
  },

  // ---- リスト ----
  ul: (props) => <ul className={styles.unorderedList} {...props} />,
  ol: (props) => <ol className={styles.orderedList} {...props} />,
  li: (props) => <li className={styles.listItem} {...props} />,

  // ---- テーブル ----
  table: (props) => <table className={styles.table} {...props} />,
  thead: (props) => <thead {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr {...props} />,
  th: (props) => <th className={styles.tableHeader} {...props} />,
  td: (props) => <td className={styles.tableCell} {...props} />,

  // ---- コードブロック ----
  figure: (props) => <CodeBlock {...props} />,

  // ---- カスタム画像 ----
  CustomImage: ({ idx }: { idx: number }) => (
    <CustomImage idx={idx} images={images} />
  ),

  // ---- OGPカード ----
  OgpCard: ({ url }: { url: string }) => {
    const ogp = ogpMap[url];
    if (!ogp) return null;
    return <OgpCard siteUrl={url} ogp={ogp} />;
  },
});
