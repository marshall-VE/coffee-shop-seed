import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Copper’s Coffee",
  description: "Fresh espresso, cappuccino and latte delivered fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Fresh espresso, cappuccino and latte delivered fast." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="text-center p-6">
          <h1 className="text-3xl font-bold text-gray-800">Copper’s Coffee</h1>
        </header>
        {children}
      </body>
    </html>
  );
}