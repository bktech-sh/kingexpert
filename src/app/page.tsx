import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyKingExpert from "./components/WhyKingExpert";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <WhyKingExpert />
    </main>
  );
}
