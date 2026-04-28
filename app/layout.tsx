import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import DotCursor from "./components/cursor/DotCursor";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEE Studios — Launch Films for Tech & SaaS",
  description:
    "IEE Studios produces and directs exclusive launch films and advertisements for tech and SaaS companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "#fff" }}>
      <body
        className={`${geist.className} antialiased`}
        style={{ background: "#fff" }}
      >
        <DotCursor />
        {children}
      </body>
    </html>
  );
}
