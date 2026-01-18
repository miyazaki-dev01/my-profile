import type { Options } from "rehype-pretty-code";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";

export const prettyCodeOptions: Options = {
  theme: "github-dark",
  keepBackground: true,
  defaultLang: "plaintext",
  bypassInlineCode: true,
  transformers: [transformerNotationDiff(), transformerNotationHighlight()],
};
