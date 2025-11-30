export const colors = {
  black: "#000",
  white: "#FFF",
  headerBackground: "#fffffff0",
  lightGray: "#0000001a",
  darkGray: "#00000066",
  skeletonWhite: "#FFFFFFCC",
  skeletonGray: "#0000000A",
} as const satisfies {
  [key: string]: string;
};

export type Color = keyof typeof colors;
