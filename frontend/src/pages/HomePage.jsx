import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";
import Contact from "../components/Contact/Contact";
import LogoSlider from "../components/Hero/LogoSlider";
import Projects from "../components/Projects/Projects";

const HomePage = () => {
  return (
    <div className="pt-20">
      <Hero />
      <LogoSlider />
      <About />
      <Projects />
      <Services />

      <Testimonial />
      <Contact />
    </div>
  );
};

export default HomePage;
