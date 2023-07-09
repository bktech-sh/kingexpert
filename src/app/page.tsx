"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Customers from "./components/Customers";
import WhyKingExpert from "./components/WhyKingExpert";
import MetodeBelajar from "./components/MetodeBelajar";
import Footer from "./components/Footer";
import useIsAndroid from "./helpers/useIsAndroid";
import { useEffect } from "react";

export default function Home() {
  const isAndroid = useIsAndroid();

  useEffect(() => {
    console.log("999 is android", isAndroid);
  }, [isAndroid]);

  return (
    <main className="flex flex-col w-screen">
      <Navbar />
      <HeroSection />
      <Customers />
      <WhyKingExpert />
      <MetodeBelajar />
      <Footer />
    </main>
  );
}
