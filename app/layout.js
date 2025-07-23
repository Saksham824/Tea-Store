import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import { AnimatePresence } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai",
  description: "Get Me A Chai is a Next.js application that helps you order chai online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionWrapper>
          <Navbar />
          <div className="relative min-h-[82vh] flex flex-col justify-between w-full overflow-hidden">
            <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
            <main className="relative z-10 px-4 sm:px-8">
              <AnimatePresence mode="wait">

              {children}
              </AnimatePresence>
              </main>
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );  
}

