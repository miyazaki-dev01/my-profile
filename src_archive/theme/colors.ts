export type Color = keyof typeof colors;

const colors = {
  brack: "#080201",
  darkWhite: "#E9E7D6",
  paleWhite: "#F8F5EE",
  lightGray: "#BDBBB1",
  darkGray: "#808080",
} as const satisfies {
  [key: string]: string;
};

export default colors;
