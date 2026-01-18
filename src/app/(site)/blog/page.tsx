import { META_TEXT } from "@/constants/metaTexts";
import { createMetadata } from "@/libs/metadata";
import { BlogListPage } from "@/features/blog/blog-list";
import { getBlogListData } from "@/features/blog/blog-list/api/getBlogList";

export const metadata = createMetadata(META_TEXT.pages.blog);

export default async function BlogListPageRoute() {
  const blogListData = await getBlogListData();

  return <BlogListPage blogListData={blogListData} />;
}
