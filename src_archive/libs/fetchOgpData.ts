import ogs from "open-graph-scraper";
import type { OgpData } from "@/types/ogp";

// フォールバック用に URL からホスト名だけ抜き出す小関数
const host = (u: string) => {
  try {
    return new URL(u).hostname;
  } catch {
    return u;
  }
};

export async function fetchOgpData(url: string): Promise<OgpData> {
  try {
    const { error, result } = await ogs({
      url,
      timeout: 10_000,
    });

    // 取得成功時
    if (!error && result) {
      const r = result as Record<string, unknown>;
      return {
        ogTitle: r.ogTitle as string | undefined,
        ogDescription: r.ogDescription as string | undefined,
        ogImage: r.ogImage as OgpData["ogImage"],
        ogUrl: (r.ogUrl as string | undefined) ?? url,
      };
    }
  } catch {
    // 例外はフォールバックへ
  }

  // フォールバック
  return {
    ogTitle: host(url),
    ogDescription: "",
    ogImage: undefined,
    ogUrl: url,
  };
}
