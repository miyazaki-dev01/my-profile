import { BlogListPage } from "@/features/blog/blog-list";
import { getBlogListData } from "@/features/blog/blog-list/api/getBlogList";

export default async function BlogListPageRoute() {
  const blogListData = await getBlogListData();

  return <BlogListPage blogListData={blogListData} />;
}
