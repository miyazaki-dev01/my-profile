import type { OgpDataByUrl } from "@/features/content-detail/types/ogp";
import { fetchOgp } from "@/features/content-detail/libs/fetchOgp";

const fallback = (url: string) => ({
  ogUrl: url,
  ogTitle: (() => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  })(),
  ogDescription: "",
});

const toHttpsUrlOrNull = (input: string): string | null => {
  try {
    const u = new URL(input);
    return u.protocol === "https:" ? u.toString() : null;
  } catch {
    return null;
  }
};

/**
 * MDX本文から <OgpCard url="..."/> を抽出し、URLごとにOGP情報をまとめて取得するサーバー関数。
 *
 * 仕様:
 * - <OgpCard url="..."/> の url 属性を抽出（重複は除外）
 * - https のみ取得対象（http/不正URLは fetch せず fallback を格納）
 * - 取得は並列で行い、一部失敗しても全体処理は継続（Promise.allSettled）
 * - 戻り値は Record<url, OgpData>（URL→OGPデータのMap）
 */
export async function fetchOgpByUrlFromMdx(
  mdxText: string
): Promise<{ ogpDataByUrl: OgpDataByUrl }> {
  const regex = /(?<!\\)<OgpCard\s+url="([^"]+)"\s*\/?>/g;
  const uniqueUrls = new Set<string>();

  for (const match of mdxText.matchAll(regex)) {
    uniqueUrls.add(match[1]);
  }

  if (uniqueUrls.size === 0) {
    return { ogpDataByUrl: {} };
  }

  const ogpDataByUrl: OgpDataByUrl = {};
  const validUrls: string[] = [];

  // https のみ取得対象にする（https以外 / 不正URLは fetch しない）
  for (const raw of uniqueUrls) {
    const httpsUrl = toHttpsUrlOrNull(raw);
    if (httpsUrl) {
      validUrls.push(httpsUrl);
    } else {
      ogpDataByUrl[raw] = fallback(raw);
    }
  }

  // 並列取得（失敗しても続行）
  const settled = await Promise.allSettled(
    validUrls.map((url) => fetchOgp(url))
  );

  settled.forEach((result, index) => {
    const url = validUrls[index];
    ogpDataByUrl[url] =
      result.status === "fulfilled" ? result.value : fallback(url);
  });

  return { ogpDataByUrl };
}
