export type ContentDetailBase = {
  articleSlug: string;
  body: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
};
