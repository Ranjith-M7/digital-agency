import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";
import Contact from "../components/Contact/Contact";
import LogoSlider from "../components/Hero/LogoSlider";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LogoSlider />
      <About />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
};

export default HomePage;
