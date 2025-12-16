import ogs from "open-graph-scraper";
import type { OgpData } from "@/features/content-detail/types/ogp";

const host = (u: string) => {
  try {
    return new URL(u).hostname;
  } catch {
    return u;
  }
};

export async function fetchOgp(url: string): Promise<OgpData> {
  try {
    const { error, result } = await ogs({
      url,
      timeout: 10_000,
    });

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
    // 例外はフォールバック
  }

  return {
    ogTitle: host(url),
    ogDescription: "",
    ogImage: undefined,
    ogUrl: url,
  };
}
