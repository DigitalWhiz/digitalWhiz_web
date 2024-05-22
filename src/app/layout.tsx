import type { Metadata } from "next";
import { titleFont } from "@/config/fonts";
import "./globals.css";
import  Providers  from "./Providers";
import Navbar from "@/components/nav/Navbar";

const Colors = {
  BLUE: '#070A60',
  ROSE: '#F64994',
  PINK: '#FC78F4',
  PURPLE: '#C327E9',
  VIOLET: '#DO38B3',
}

export const metadata: Metadata = {
  title: "Digital Whiz",
  description: "Digital marketing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
      <body className={titleFont.className} style={{backgroundColor: Colors.BLUE}}>
        <Navbar />
        {children}
      </body>
      </Providers>
    </html>
  );
}
