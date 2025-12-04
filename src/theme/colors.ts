export const colors = {
  black: "#000",
  white: "#FFF",
  darkGray: "#00000066",
  lightGray: "#0000001A",
  sideNavBackground: "#FFFFFF33",
  headerNavBackground: "#FFFFFFF0",
  skeletonWhite: "#FFFFFFCC",
  skeletonGray: "#0000000A",
  notFoundCopyright: "#FFFFFF66",
} as const satisfies {
  [key: string]: string;
};

export type Color = keyof typeof colors;
