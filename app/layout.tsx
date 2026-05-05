import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "IEE Studios — Launch Films for Tech & SaaS",
  description:
    "IEE Studios produces and directs exclusive launch films and advertisements for tech and SaaS companies.",
};

// const bricolage = Bricolage_Grotesque({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   variable: "--font-bricolage",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: "#fff" }}>
      <body
        className={`${inter.className} font-sans`}
        style={{ background: "#fff" }}
      >
        {children}
      </body>
    </html>
  );
}
