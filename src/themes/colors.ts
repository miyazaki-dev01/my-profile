export const colors = {
  black: "#000",
  white: "#FFF",
  gray: "#0000004D",
  darkGray: "#00000066",
  lightGray: "#0000001A",
  darkModeWhite: "#ffffff99",
  sideNavBackground: "#FFFFFF33",
  headerNavBackground: "#FFFFFFF0",
  buttonHoverBackground: "#00000005",
  skeletonGray: "#0000000A",
  skeletonWhite: "#FFFFFFCC",
  inputBackgroundGray: "#0000000A",
  imageModalBackdrop: "#0a0a0a",
  notFoundCopyright: "#FFFFFF66",
  red: "#eb3030",
} as const satisfies {
  [key: string]: string;
};

export type Color = keyof typeof colors;
