import type { Options } from "rehype-pretty-code";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";

export const prettyCodeOptions: Options = {
  theme: "plastic",
  keepBackground: true,
  defaultLang: "plaintext",
  bypassInlineCode: true,
  transformers: [transformerNotationDiff(), transformerNotationHighlight()],
};
