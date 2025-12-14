export const MICROCMS_ENDPOINT = {
  profile: "profile",
  portfolio: "portfolio",
  blog: "blog",
  skill: "skill",
  career: "career",
} as const;

export type MicrocmsEndpointKey = keyof typeof MICROCMS_ENDPOINT;
