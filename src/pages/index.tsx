import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import Header from "@/components/header/header";
import { HeroSection } from "@/components/hero-section/hero-section";
import { FeatureSection } from "@/components/feature-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
    </>
  )
}

