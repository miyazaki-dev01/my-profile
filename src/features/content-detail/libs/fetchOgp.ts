import ogs from "open-graph-scraper";
import type { OgpData } from "@/features/content-detail/types/ogp";

const host = (u: string) => {
  try {
    return new URL(u).hostname;
  } catch {
    return u;
  }
};

const pickString = (v: unknown): string | undefined =>
  typeof v === "string" ? v : undefined;

export async function fetchOgp(url: string): Promise<OgpData> {
  try {
    const { error, result } = await ogs({
      url,
      timeout: 10_000,
    });

    if (!error && result) {
      const r = result as Record<string, unknown>;
      return {
        ogTitle: typeof r.ogTitle === "string" ? r.ogTitle : undefined,
        ogDescription:
          typeof r.ogDescription === "string" ? r.ogDescription : undefined,
        ogImage: r.ogImage as OgpData["ogImage"],
        ogUrl: (typeof r.ogUrl === "string" ? r.ogUrl : undefined) ?? url,
        favicon: pickString(r.favicon),
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
    favicon: undefined,
  };
}
