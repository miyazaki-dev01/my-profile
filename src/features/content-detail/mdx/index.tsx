import React from "react";
import type { MDXComponents } from "next-mdx-remote-client/rsc";
import type { ContentDetailBase } from "@/features/content-detail/types/contentDetailBase";
import type { OgpDataByUrl } from "@/features/content-detail/types/ogp";
import { ExternalLink } from "@/components/elements/Link/ExternalLink";
import { MdxIndexedImage } from "@/features/content-detail/mdx/components/MdxIndexedImage";
import { MdxOgpCard } from "@/features/content-detail/mdx/components/MdxOgpCard";
import { MdxCodeBlock } from "@/features/content-detail/mdx/components/MdxCodeBlock";
import * as styles from "./style.css";

type InlineCodeProps = React.HTMLAttributes<HTMLElement> & {
  "data-theme"?: string;
  "data-language"?: string;
};

type CodeBlockProps = React.HTMLAttributes<HTMLElement> & {
  "data-rehype-pretty-code-figure"?: string;
};

export function createMdxComponents(
  images: ContentDetailBase["images"],
  ogpDataByUrl: OgpDataByUrl
): MDXComponents {
  return {
    // MDX全体のラッパー
    wrapper: ({ children }) => <div className={styles.mdxRoot}>{children}</div>,

    // 見出し
    h2: (props) => <h2 className={styles.h2} {...props} />,
    h3: (props) => <h3 className={styles.h3} {...props} />,
    h4: (props) => <h4 className={styles.h4} {...props} />,

    // テキスト要素
    p: (props) => <p className={styles.p} {...props} />,
    strong: (props) => <strong className={styles.strong} {...props} />,
    blockquote: (props) => (
      <blockquote className={styles.blockquote} {...props} />
    ),
    a: (props) => (
      <ExternalLink href={props.href} className={styles.a}>
        {props.children}
      </ExternalLink>
    ),
    code: (props: InlineCodeProps) => {
      const isCodeBlock = Boolean(
        props["data-theme"] || props["data-language"]
      );
      const className = isCodeBlock ? undefined : styles.inlineCode;
      return <code className={className} {...props} />;
    },

    // リスト
    ul: (props) => <ul className={styles.ul} {...props} />,
    ol: (props) => <ol className={styles.ol} {...props} />,
    li: (props) => <li className={styles.li} {...props} />,

    // テーブル
    table: (props) => <table className={styles.table} {...props} />,
    thead: (props) => <thead {...props} />,
    tbody: (props) => <tbody {...props} />,
    tr: (props) => <tr {...props} />,
    th: (props) => <th className={styles.th} {...props} />,
    td: (props) => <td className={styles.td} {...props} />,

    // 画像
    MdxIndexedImage: ({ idx }: { idx: number }) => (
      <MdxIndexedImage idx={idx} images={images} />
    ),

    // OGPカード
    MdxOgpCard: ({ url }: { url: string }) => {
      return <MdxOgpCard url={url} ogpData={ogpDataByUrl} />;
    },

    // コードブロック
    figure: (props: CodeBlockProps) => <MdxCodeBlock {...props} />,
  };
}
