export type Breakpoints = keyof typeof breakpoints;

export const breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  maxWith: 1360,
} as const satisfies {
  [key: string]: number;
};

export default breakpoints;
