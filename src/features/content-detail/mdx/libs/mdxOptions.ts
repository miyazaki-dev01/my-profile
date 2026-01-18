import type { MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { prettyCodeOptions } from "@/features/content-detail/mdx/libs/prettyCodeOptions";
import type { PluggableList } from "unified";

export const mdxOptions: MDXRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkBreaks],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, prettyCodeOptions],
    ] as PluggableList,
    format: "mdx",
  },
  parseFrontmatter: true,
};
