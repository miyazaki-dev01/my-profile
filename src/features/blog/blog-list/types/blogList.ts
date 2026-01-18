export type BlogListItem = {
  id: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  title: string;
  articleSlug: string;
  publishedAt: string; // 公開日時
};

export type BlogList = {
  blogList: BlogListItem[];
};
