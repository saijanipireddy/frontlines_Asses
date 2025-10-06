import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HeroCarousel from "../components/HeroCourosel/HeroCourosel";
import Companies from "../components/Companies/Companies";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div id="homepage">
        <Hero />
      </div>
      <div id="resources">
        <HeroCarousel />
      </div>
      <div id="companies">
        <Companies />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
