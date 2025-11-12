export type PortfolioDetailProps = {
  id: string;
  title: string;
  serviceURL: string;
  description: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  body: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  articleSlug: string;
  publishedAt: string; // 公開日時
  revisedAt: string; // 更新日時
};
