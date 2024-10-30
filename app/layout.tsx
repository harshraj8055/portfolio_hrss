import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sofia_Sans, Playpen_Sans } from "next/font/google";
import localFont from "next/font/local";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Harsh Raj - Product Manager",
  description:
    "Welcome to my personal portfolio website. I'm an Aspiring  Product Manager, studying at the Indian Institute of Information Technology Guwahati. Building Innovative and a vision-driven product drives me to create experiences for people. .",
};

const cubonoFont = localFont({
  src: "./fonts/Cubano.ttf",
  weight: "900",
  display: "swap",
  variable: "--font-heading",
});

const primaryFont = localFont({
  src: "./fonts/Exo2.ttf",
  display: "swap",
  variable: "--font-primary",
});

const secondaryFont = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  display: "swap",
  variable: "--font-secondary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className={cn(
          primaryFont.variable,
          secondaryFont.variable,
          cubonoFont.variable,
        )}
      >
        <main className="h-full w-full">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
