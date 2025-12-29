import { Barlow_Condensed, Roboto } from "next/font/google";

export const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-barlow",
  display: "swap",
  fallback: ["system-ui"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
  display: "swap",
  fallback: ["system-ui"],
});
