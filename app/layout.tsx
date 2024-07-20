import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin", "latin-ext"], weight: "300" });

export const metadata: Metadata = {
  title: "Astoria Runners",
  description: "Website for Astoria Runners",
  icons: {
    icon: '/icon.png',
    apple: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
