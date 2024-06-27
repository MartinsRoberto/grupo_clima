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

  return (
    <>
      <Header />
      <div style={{ marginTop: "58px" }}></div>
      <Outlet />
      <div className="bg-wave"></div>
      <Footer />
    </>
  );
}

export default App;
