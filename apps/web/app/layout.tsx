import type { Metadata } from "next";
import { dellaRespira } from "./fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "TokenLP",
  description: "Create Tokens on Solana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dellaRespira.className}`}>
        {children}
      </body>
    </html>
  );
}
