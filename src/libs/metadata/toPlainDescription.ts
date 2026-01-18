/**
 * MDX本文から meta description 用の“プレーンテキスト”を生成する
 * - MDXコンポーネント、コードブロック、装飾記法を落とす
 * - リンクは表示テキストを残す
 * - インラインコードは中身を残す
 */
export function toPlainDescription(input: string, max = 140): string {
  // 改行コードを統一（Windows/Linux混在でも安定）
  const normalized = input.replace(/\r\n?/g, "\n");

  const text = normalized
    // frontmatter を先頭にある場合のみ除去
    .replace(/^\s*---[\s\S]*?---\s*/, " ")

    // import/export（MDX先頭に書く場合がある）を除去
    .replace(/^\s*(import|export)\s.+$/gm, " ")

    // コードブロック（```lang ... ```）を丸ごと除去
    .replace(/```[\s\S]*?```/g, " ")

    // MDXの自己終了コンポーネント（例: <MdxOgpCard ... />）を除去
    .replace(/<([A-Z][\w.]*)\b[^>]*\/\s*>/g, " ")

    // MDXコンポーネントの開始/終了タグだけ除去（中の文字は残す）
    .replace(/<([A-Z][\w.]*)\b[^>]*>/g, " ")
    .replace(/<\/([A-Z][\w.]*)\s*>/g, " ")

    // Markdown画像: ![alt](url) → alt を残す
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, " $1 ")

    // Markdownリンク: [text](url) → text を残す
    .replace(/\[([^\]]+)\]\([^)]+\)/g, " $1 ")

    // インラインコード: `contentId` → contentId
    .replace(/`([^`]+)`/g, "$1")

    // 見出し（#）は記号だけ除去
    .replace(/^\s*#{1,6}\s*/gm, " ")

    // 引用（>）の記号を除去
    .replace(/^\s*>\s*/gm, " ")

    // 箇条書き（- * +）の記号を除去
    .replace(/^\s*[-*+]\s+/gm, " ")

    // 番号付きリスト（1.）の記号を除去
    .replace(/^\s*\d+\.\s+/gm, " ")

    // 強調/取り消し等の記号をざっくり除去（* と ~ のみ）
    .replace(/[*~]/g, " ")

    // HTMLタグ（<br> 等）が残っていたら除去
    .replace(/<\/?[^>]+>/g, " ")

    // 記号だけの行を除去（任意）
    .replace(/^\s*(?:\.{3,}|…{1,}|—{2,}|-{2,})\s*$/gm, " ")

    // 連続スペース/改行を1つに正規化してトリム
    .replace(/\s+/g, " ")
    .trim();

  if (Array.from(text).length <= max) return text;

  const sliced = Array.from(text).slice(0, max).join("");
  return `${sliced}…`;
}
