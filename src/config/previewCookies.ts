export type ContentType = "blog" | "portfolio";

export function isContentType(x: string): x is ContentType {
  return x === "blog" || x === "portfolio";
}

// Cookie 名の生成関数
export function cookieNames(type: ContentType) {
  return {
    draftKey: `mcms_draftKey_${type}` as const,
    contentId: `mcms_contentId_${type}` as const,
  };
}
