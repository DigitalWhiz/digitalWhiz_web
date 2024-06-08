import type { Metadata } from "next";
import { titleFont } from "@/config/fonts";
import "./globals.css";
import  Providers  from "./Providers";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/footer";

const Colors = {
  BLUE: '#070A60',
  ROSE: '#F64994',
  PINK: '#FC78F4',
  PURPLE: '#C327E9',
  VIOLET: '#DO38B3',
}

export const metadata: Metadata = {
  title: "Digital Whiz",
  description: "Agencia Marketing Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      
      <body className={titleFont.className} style={{backgroundColor: Colors.BLUE}}>
      <Providers>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
