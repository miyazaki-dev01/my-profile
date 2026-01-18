export type BlogDetail = {
  title: string;
  tags?: string[];
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

export type BlogListSlug = {
  articleSlug: string;
};
