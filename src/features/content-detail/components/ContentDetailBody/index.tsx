import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { PortfolioDetail } from "@/features/portfolio/portfolio-detail/types/portfolioDetail";
import type { OgpDataByUrl } from "@/features/content-detail/types/ogp";
import { createMdxComponents } from "@/features/content-detail/mdx";
import { mdxOptions } from "@/features/content-detail/mdx/libs/mdxOptions";

type Props = {
  body: PortfolioDetail["body"];
  images: PortfolioDetail["images"];
  ogpData: OgpDataByUrl;
};

export function ContentDetailBody({ body, images, ogpData }: Props) {
  const components = createMdxComponents(images, ogpData);

  return (
    <MDXRemote source={body} options={mdxOptions} components={components} />
  );
}
