export const colors = {
  black: "#000",
  black_02: "#00000005",
  black_04: "#0000000A",
  black_10: "#0000001A",
  black_12: "#0000001F",
  black_20: "#00000033",
  black_30: "#0000004D",
  black_40: "#00000066",
  imageModalBackdrop: "#0a0a0a",
  white: "#FFF",
  white_00: "#FFFFFF00",
  white_20: "#FFFFFF33",
  white_40: "#FFFFFF66",
  white_60: "#FFFFFF99",
  white_80: "#FFFFFFCC",
  white_94: "#FFFFFFF0",
  red: "#eb3030",
} as const satisfies {
  [key: string]: string;
};

export type Color = keyof typeof colors;
