export const breakpoints = {
  mobile: 568,
  tablet: 768,
  desktop: 1025,
} as const satisfies {
  [key: string]: number;
};
