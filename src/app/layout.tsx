import "./globals.css";
import { Manrope } from "next/font/google";
import Script from "next/script";

const font = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ted2xmen | ted2xmen.dev",
  description: "Software Developer",
  url: "https://ted2xmen.dev",
  keywords: ["software developer", "front-end developer"],
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
          src="https://cloud.umami.is/script.js"
          data-website-id="84eefeb2-350a-4529-8756-e42c91c2f4a8"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${font.className} antialiased`}>
        <main className="mx-auto max-w-5xl p-4">{children}</main>
      </body>
    </html>
  );
}
