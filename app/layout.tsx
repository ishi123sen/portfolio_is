import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font=Inter({
  weight:['100','200','300','400','500','600'],
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "Ishika's portfolio",
  description: "Portfolio built with nextjs 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}>
          <ResponsiveNav/>
          
        {children}
      </body>
    </html>
  );
}
