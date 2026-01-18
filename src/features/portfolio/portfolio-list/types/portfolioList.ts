export type PortfolioListItem = {
  id: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  title: string;
  description: string;
  articleSlug: string;
};

export type PortfolioList = {
  portfolioList: PortfolioListItem[];
};
