import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ReactNode } from "react";
import "@/app/globals.css";
import "@/styles/admin-toolkit.css";
import { LenisProvider } from "@/components/LenisProvider";
import { BRAND_LOGO_URL } from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Administrative Toolkit Training | CFI Ideation",
  description:
    "Master a suite of digital tools to enhance your productivity and ensure smooth workflow. Join CFI Ideation's Administrative Toolkit training program.",
  keywords: [
    "administrative toolkit",
    "training",
    "CFI Ideation",
    "Google Workspace",
    "Trello",
    "productivity",
  ],
  authors: [{ name: "CFI Ideation" }],
  icons: {
    icon: BRAND_LOGO_URL,
    shortcut: BRAND_LOGO_URL,
    apple: BRAND_LOGO_URL,
  },
  openGraph: {
    title: "Administrative Toolkit Training | CFI Ideation",
    description:
      "Master a suite of digital tools to enhance your productivity and ensure smooth workflow.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
