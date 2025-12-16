export const MICROCMS_ENDPOINT = {
  profile: "profile",
  portfolio: "portfolio",
  blog: "blog",
  skill: "skill",
  career: "career",
} as const satisfies {
  [key: string]: string;
};

export type MicrocmsEndpointKey = keyof typeof MICROCMS_ENDPOINT;
