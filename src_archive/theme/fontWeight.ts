export type FontWeight = keyof typeof fontWeight;

const fontWeight = {
  normal: 500,
  midium: 550,
  bold: 600,
  bold_x: 700,
} as const satisfies {
  [key: string]: number;
};

export default fontWeight;
