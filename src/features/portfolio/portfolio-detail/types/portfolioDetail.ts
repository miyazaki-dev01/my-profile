export type PortfolioDetail = {
  mainImage: {
    url: string;
    height: number;
    width: number;
  };
  title: string;
  description: string;
  serviceURL: string;
  body: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  articleSlug: string;
};

export type PortfolioListSlug = {
  articleSlug: string;
};
