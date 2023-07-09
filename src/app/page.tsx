"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Customers from "./components/Customers";
import WhyKingExpert from "./components/WhyKingExpert";
import MetodeBelajar from "./components/MetodeBelajar";
import Footer from "./components/Footer";
import useIsAndroid from "./helpers/useIsAndroid";
import MobileNavbar from "./components/MobileNavbar";
import MobileHeroSection from "./components/MobileHeroSection";
import MobileCustomers from "./components/MobileCustomers";

export default function Home() {
  const isAndroid = useIsAndroid();

  return (
    <main className="flex flex-col w-screen">
      {isAndroid ? (
        <>
          <MobileNavbar />
          <MobileHeroSection />
          <MobileCustomers />
        </>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <Customers />
          <WhyKingExpert />
          <MetodeBelajar />
          <Footer />
        </>
      )}
    </main>
  );
}
