
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Using Poppins for modern look
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "OURYX - Built for Serious Trading",
  description: "Trade Forex, Indices, Commodities & Crypto with 0.0 pips spreads and 500:1 leverage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
