import { fetchOgpData } from "@/libs/fetchOgpData";
import type { OgpDataList } from "@/types/ogp";

// フォールバック生成
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

export const fetchOgpDataFromMdx = async (
  mdxText: string
): Promise<{
  ogpDataList: OgpDataList;
}> => {
  const ogpDataList: OgpDataList = {};

  // 正規表現で <OgpCard url="..." /> を抽出
  const regex = /(?<!\\)<OgpCard\s+url="([^"]+)"\s*\/?>/g;
  const uniqueUrls = new Set<string>();
  for (const m of mdxText.matchAll(regex)) uniqueUrls.add(m[1]);

  // すべてのURLを並列取得（失敗しても続行）
  const urls = Array.from(uniqueUrls);
  const settled = await Promise.allSettled(urls.map((u) => fetchOgpData(u)));

  settled.forEach((res, i) => {
    const url = urls[i];
    ogpDataList[url] = res.status === "fulfilled" ? res.value : fallback(url);
  });

  return { ogpDataList };
};
