import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEE Studios — Launch Films for Tech & SaaS",
  description:
    "IEE Studios produces and directs exclusive launch films and advertisements for tech and SaaS companies.",
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-bricolage",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "#fff" }}>
      <body
        className={`${bricolage.className} font-sans`}
        style={{ background: "#fff" }}
      >
        {children}
      </body>
    </html>
  );
}
