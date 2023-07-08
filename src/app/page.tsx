import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Customers from "./components/Customers";
import WhyKingExpert from "./components/WhyKingExpert";

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <Navbar />
      <HeroSection />
      <Customers />
      <WhyKingExpert />
    </main>
  );
}
