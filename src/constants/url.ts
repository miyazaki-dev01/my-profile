type Protcol = "http" | "https";

type Url = `${Protcol}://${string}`;

export const URL = {
  appRoot: "https://miyazaki-profile.com",
} as const satisfies {
  [key: string]: Url;
};
