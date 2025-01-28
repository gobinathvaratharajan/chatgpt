import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nextjs ChatGPT App",
  description: "ChatGPT brought you by nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="text-white font-bold bg-gray-900 text-2xl">
            <div className="flex flex-grow">
                <Link href="/">Chat GPT</Link>
                <Link href="/about">About</Link>
            </div>
            <div></div>
        </header>
        <div className="flex flex-col md:flex-row">
            <div className="flex-grow">
                {children}
            </div>
        </div>
      </body>
    </html>
  );
}
