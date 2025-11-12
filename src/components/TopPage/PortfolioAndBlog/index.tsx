import React from "react";
import { BasicLayout } from "@/components/TopPage/BasicLayout";
import { BlogContent } from "./BlogContent";
import { PortfolioContent } from "./PortfolioContent";
import { PortfolioAndBlogStyle } from "./style.css";
import { PortfolioCardProps } from "@/types/PortfolioCard";
import { BlogCardProps } from "@/types/BlogCard";

type PortfolioAndBlogProps = {
  portfolios: PortfolioCardProps[];
  blogs: BlogCardProps[];
};

export const PortfolioAndBlog = ({ portfolios, blogs }: PortfolioAndBlogProps) => {
  return (
    <BasicLayout themeColor="black">
      <div className={PortfolioAndBlogStyle}>
        <PortfolioContent portfolios={portfolios} />
        <BlogContent blogs={blogs} />
      </div>
    </BasicLayout>
  );
};
