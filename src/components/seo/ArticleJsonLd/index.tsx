import { SITE_CONFIG } from "@/constants/site";
import type { BlogDetail } from "@/features/blog/blog-detail/types/blogDetail";

type Props = {
  article: BlogDetail;
  url: string;
};

export function ArticleJsonLd({ article, url }: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.thumbnail.url,
    datePublished: article.publishedAt,
    dateModified: article.revisedAt,
    url,
    inLanguage: "ja-JP",
    author: {
      "@type": "Person",
      name: SITE_CONFIG.person,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Person",
      name: SITE_CONFIG.person,
      url: SITE_CONFIG.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 0),
      }}
    />
  );
}
