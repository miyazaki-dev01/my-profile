export const API_ROUTES = {
  draftDisable: "/api/preview/disable",
} as const satisfies {
  [key: string]: string;
};
