import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Xyryll Jay Taneo | Full-Stack Developer",
  description:
    "Portfolio of Xyryll Jay Taneo, a computer science student and full-stack developer building practical systems for student organizations and communities.",
  applicationName: "Xyryll Jay Taneo Portfolio",
  authors: [{ name: "Xyryll Jay Taneo" }],
  creator: "Xyryll Jay Taneo",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Xyryll Jay Taneo",
    "full-stack developer",
    "Next.js developer",
    "Flutter developer",
    "portfolio",
  ],
  openGraph: {
    title: "Xyryll Jay Taneo | Full-Stack Developer",
    description:
      "Community-focused web and mobile systems built for real student and organizational workflows.",
    siteName: "Xyryll Jay Taneo Portfolio",
    type: "website",
    locale: "en_PH",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xyryll Jay Taneo | Full-Stack Developer",
    description:
      "Community-focused web and mobile systems built for real student and organizational workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
