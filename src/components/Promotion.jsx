import React from "react";
import { motion } from "framer-motion";
import "./Promotion.css";

const Promotion = () => {
  return (
    <motion.section
      id="promotion"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-center text-lg-start mb-5 text-color-green">
                24/7 SERVICES
              </h2>
              <h5 className="text-center text-lg-start mb-5 text-white">
                Air conditioning services encompass a wide range of activities
                related to the installation, maintenance, repair, and
                replacement of ACs.
              </h5>
            </motion.div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 text-white">
            <motion.div
              className="p-4 rounded promo"
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-center text-lg-start">Best Offer!</h2>
              <h3 className="text-center text-lg-start">
                Sunday Deal 50% Off<span>UPTO</span>
              </h3>
              <p className="text-center text-lg-start">
                *installation, maintenance, repair, and replacement of ACs.
              </p>
              <a href="#contact" className="btn btn-secondary d-block">
                Book Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Promotion;
