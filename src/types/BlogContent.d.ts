export type BlogDetailProps = {
  id: string;
  title: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  category: string[];
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
