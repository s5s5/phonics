import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { HydrationProvider } from "react-hydration-provider";

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
    <HydrationProvider>
      <html lang="en-US">
        <body className="font-sans">
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </HydrationProvider>
  );
}
