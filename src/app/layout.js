
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // "use client"
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <p className="copyright">© Copyright 2024. Designed and Developed by Thato Mashori</p>
      </body>
    </html>
  );
}
