import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://thithada-portfolio.vercel.app"),
  title: "Thithada Islam — Software Engineer",
  description: "Portfolio of Thithada Islam, a software engineer crafting thoughtful full-stack web experiences.",
  openGraph: {
    title: "Thithada Islam — Software Engineer",
    description: "Full-stack developer with a frontend focus, crafting thoughtful digital products.",
    type: "website",
    images: [{ url: "/og.png", alt: "Thithada Islam — Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thithada Islam — Software Engineer",
    description: "Full-stack developer with a frontend focus, crafting thoughtful digital products.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
