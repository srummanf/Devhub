import type { Metadata } from "next";

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import MouseMoveEffect from "@/components/mousemoveEffect";



export const metadata: Metadata = {
  title: "HackNightHub",
  description: "Developer Resources for Hacknight'25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased vsc-initialized overflow-x-hidden`}
    //   >
    //     {children}
    //   </body>
    // </html>
    <html lang="en" className="dark">
      <body className={`${GeistSans.className} bg-background text-foreground antialiased overflow-x-hidden `}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  );
}
