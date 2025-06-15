import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ReactNode } from "react";
import { Favicon } from "@/images";
//<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
const lato = Lato({ 
  subsets: ["latin", "latin-ext"],
  style: ["italic", "normal"],
  weight: ["900", "100"],
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Astoria Runners",
  description: "Website for Astoria Runners",
  icons: {
    icon: Favicon.default.src,
    apple: Favicon.default.src
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
