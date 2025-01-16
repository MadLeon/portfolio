import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Halo from "@/components/Halo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leon Liu",
  description: "A portfolio site to showcase my web skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 text-slate-400 selection:bg-teal-400 selection:text-teal-900 antialiased`}
      >
        <div className="group/spotlight relative">
          <Halo />
          {children}
        </div>
      </body>
    </html>
  );
}
