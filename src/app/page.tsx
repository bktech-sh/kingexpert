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
import MobileWhyKingExpert from "./components/MobileWhyKingExpert";
import MobileFooter from "./components/MobileFooter";
import Tutor from "./components/Tutor";
import CardHubungi from "./components/CardHubungi";

export default function Home() {
  const isAndroid = useIsAndroid();

  return (
    <main className="flex flex-col w-screen">
      {isAndroid ? (
        <>
          <MobileNavbar />
          <MobileHeroSection />
          <MobileCustomers />
          <MobileWhyKingExpert />
          <MobileFooter />
        </>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <Customers />
          <WhyKingExpert />
          <MetodeBelajar />
          <Tutor />
          <CardHubungi />
          <Footer />
        </>
      )}
    </main>
  );
}
