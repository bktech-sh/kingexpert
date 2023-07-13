"use client";

import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import MobileNavbar from "../components/MobileNavbar";
import Navbar from "../components/Navbar";
import useIsAndroid from "../helpers/useIsAndroid";
import MainContent from "./components/MainContent";

const About = () => {
  const isAndroid = useIsAndroid();

  return (
    <main className="flex flex-col w-screen">
      {isAndroid ? (
        <>
          <MobileNavbar />
          <MobileFooter />
        </>
      ) : (
        <>
          <Navbar />
          <MainContent />
          <Footer />
        </>
      )}
    </main>
  );
};

export default About;
