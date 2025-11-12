export type BlogCardProps = {
  id: string;
  title: string;
  category?: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  articleSlug: string;
  revisedAt: string;
};

export type BlogsProps = {
  blogs: BlogCardProps[];
};
