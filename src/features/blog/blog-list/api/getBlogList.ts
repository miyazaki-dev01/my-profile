import { microcmsClient } from "@/libs/microcms";
import type {
  BlogListItem,
  BlogList,
} from "@/features/blog/blog-list/types/blogList";

export async function getBlogListData(): Promise<BlogList> {
  const blogList = await microcmsClient.getAllContents<BlogListItem>({
    endpoint: "blog",
    queries: {
      fields: "id,thumbnail,title,articleSlug,publishedAt",
    },
  });

  return { blogList };
}
