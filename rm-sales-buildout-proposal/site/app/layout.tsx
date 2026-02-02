import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GHL Mastery Sales Buildout Proposal | Raize The Vibe",
  description:
    "A custom proposal to build a complete sales department for GHL Mastery. Scale from $35K/month to $100K+/month with a proven team, systems, and processes.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-base text-text-secondary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
