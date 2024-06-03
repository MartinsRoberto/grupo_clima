import React from "react";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import About from "../components/About";
import Team from "../components/Team";
import IsotopeGrid from "../components/Gallery";
import Promotion from "../components/Promotion";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <IsotopeGrid />
      <Testimonials />
      <Promotion />
      <Blog /> 
    </>
  );
};

export default Home;
