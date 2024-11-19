import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from "next/font/google";
import { config } from "@/lib/config";
import Script from "next/script";
import Navbar from "@/components/navbar";

const font = Archivo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={process.env.UMAMI_URL}
          data-website-id={process.env.UMAMI_ID}
        />
      </head>
      <body className={`${font.className}  antialiased`}>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-slate-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0, 255, 38, 0.3),rgba(255,255,255,0))]"></div>
        <Navbar />
        <main className="max-w-5xl mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}
