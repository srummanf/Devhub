import type { Metadata } from "next";

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import MouseMoveEffect from "@/components/mousemoveEffect";



export const metadata: Metadata = {
  title: "KnightsDen | HK'25",
  description:
    "Discover top-tier resources, UI kits, and tools to elevate your development journey at Hacknight'25.",
  metadataBase: new URL("https://www.knightsden.xyz/"),
  keywords: [
    "react",
  "ui library",
  "hackathon resources",
  "nextjs",
  "frontend development",
  "tailwind css",
  "framer motion",
  "component library",
  "developer tools",
  "open source",
  "web development",
  "modern UI",
  "design systems",
  "hacknight 2025",
  "coding resources"
  ],
  authors: [{ name: "HK'25 Team" }],
  creator: "HC Team",
  publisher: "HC",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.knightsden.xyz/",
    siteName: "KnightsDen",
    title: "KnightsDen | HK'25",
    description:
      "Discover top-tier resources, UI kits, and tools to elevate your development journey at Hacknight'25.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hacknight'25",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
