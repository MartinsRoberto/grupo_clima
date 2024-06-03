import React from "react";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refImage, inViewImage] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="text-white">
      <div className="container">
        <div className="row">
          <motion.div
            ref={refImage}
            initial={{ opacity: 0, y: 100 }}
            animate={inViewImage ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-lg-6 d-flex align-items-center order-2 order-lg-1"
          >
            <img
              className="img-fluid mb-2 mb-md-3 mb-lg-0 rounded"
              src="https://fakeimg.pl/800x500"
              alt=""
            />
          </motion.div>
          <motion.div
            ref={refText}
            initial={{ opacity: 0, y: 100 }}
            animate={inViewText ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start order-1 order-lg-2"
          >
            <h2 className="text-center text-lg-start text-color-green">
              About
            </h2>
            <h5 className="text-center text-lg-start mb-5 fw-light">
              About About About About About About
            </h5>
            <p className="text-center text-lg-start ">
              Air conditioning services encompass a wide range of activities
              related to the installation, maintenance, repair, and replacement
              of ACs.
            </p>
            <h5 className="text-center text-lg-start text-color-blue mb-4">
              Why us?
            </h5>
            <ul>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Motivo A
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Motivo A
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Motivo A
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Motivo A
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
