import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnapTone | High-Quality Lightroom Presets",
  description: "Transform your photos instantly with 1-click presets. Discover, preview, and download premium Lightroom presets for Cafe, Moody, Travel, and Film aesthetics.",
  keywords: ["Lightroom presets", "photo editing", "free presets", "photography", "Instagram filters"],
  openGraph: {
    title: "SnapTone | High-Quality Lightroom Presets",
    description: "Transform your photos instantly with 1-click presets.",
    type: "website",
    siteName: "SnapTone",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
