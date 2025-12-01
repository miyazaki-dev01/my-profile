export const colors = {
  black: "#000",
  white: "#FFF",
  lightGray: "#0000001A",
  darkGray: "#00000066",
  sideNavBackground: "#FFFFFF33",
  headerNavBackground: "#FFFFFFF0",
  skeletonWhite: "#FFFFFFCC",
  skeletonGray: "#0000000A",
  notFoundCopyright: "#FFFFFF66",
} as const satisfies {
  [key: string]: string;
};

export type Color = keyof typeof colors;
