export type FontSizes = keyof typeof fontSizes;

const fontSizes = {
  xxs: 10,
  xs: 12,
  s: 14,
  m: 16,
  ml: 20,
  l: 24,
  xl: 28,
  xxl: 32,
  xxml: 36,
  xxxl: 42,
} as const satisfies {
  [key: string]: number;
};

export default fontSizes;
