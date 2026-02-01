import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Hutchings Wedding Party",
  description: "Wedding information and links for The Hutchings Wedding Party",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
