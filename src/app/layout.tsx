import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import DatadogInit from "@/app/components/DatadogInit";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "✨ Phonics /fon-iks/",
  description: "let's learn phonics together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={inter.className}>
        <DatadogInit />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
