export type MetaContentData = {
  articleSlug: string;
  title: string;
  description?: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
};
