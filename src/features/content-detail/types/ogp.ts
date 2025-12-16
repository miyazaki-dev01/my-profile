export type OgpImage = {
  url: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
  type?: string;
};

export type OgpData = {
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: OgpImage | OgpImage[];
};

export type OgpDataByUrl = Record<string, OgpData>;
