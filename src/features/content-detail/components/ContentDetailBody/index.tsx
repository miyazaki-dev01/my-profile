import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { ContentDetailBase } from "@/features/content-detail/types/contentDetailBase";
import type { ContentDetailImage } from "@/features/content-detail/types/contentDetailImage";
import type { OgpDataByUrl } from "@/features/content-detail/types/ogp";
import { createMdxComponents } from "@/features/content-detail/mdx";
import { mdxOptions } from "@/features/content-detail/mdx/libs/mdxOptions";

type Props = {
  body: ContentDetailBase["body"];
  images: ContentDetailImage[];
  ogpData: OgpDataByUrl;
};

export function ContentDetailBody({ body, images, ogpData }: Props) {
  const components = createMdxComponents(images, ogpData);

  return (
    <MDXRemote source={body} options={mdxOptions} components={components} />
  );
}
