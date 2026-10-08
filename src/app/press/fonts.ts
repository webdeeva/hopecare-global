import { Fraunces, Libre_Franklin } from "next/font/google";
export const serif = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-serif" });
export const sans = Libre_Franklin({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-sans" });