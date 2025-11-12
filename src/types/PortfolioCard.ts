export type PortfolioCardProps = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  articleSlug: string;
};

export type PortfolioListProps = {
  portfolios: PortfolioCardProps[];
};
