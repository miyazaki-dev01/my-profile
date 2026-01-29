import type { SiteConfig } from "@/constants/site";

type Props = {
  site: SiteConfig;
};

export function JsonLd({ site }: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "ja-JP",
    publisher: {
      "@type": "Person",
      name: site.person,
      url: site.url,
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
