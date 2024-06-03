import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaArrowCircleUp } from "react-icons/fa";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { motion } from 'framer-motion';

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: "58px" }}></div>
      {/* <div className="btn-top" onClick={handleTop}>
        <div className="btn-top-bg"></div>
        <FaArrowCircleUp className="btn-top-arrow"/>
      </div> */}
      <Outlet />
      <div className="bg-wave"></div>
      <Footer />
    </>
  );
}

export default App;
