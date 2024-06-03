import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import "./Gallery.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IsotopeGrid = () => {
  const gridRef = useRef(null);
  const iso = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    iso.current = new Isotope(gridRef.current, {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });

    return () => {
      iso.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (iso.current) {
      iso.current.arrange({ filter: filterKey });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  return (
    <section id="gallery" className="bg-light" ref={ref}>
      <div className="container">
        <div className="row">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-md-12 text-center"
          >
            <h2 className="text-color-blue">Our Gallery</h2>
            <h5 className="mb-5 fw-light">
              Our gallery Our gallery Our gallery Our gallery
            </h5>
          </motion.div>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shadow-sm rounded-pill px-3 py-2 btn-gallery"
            onClick={handleFilterKeyChange("*")}
          >
            Show All
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="shadow-sm rounded-pill px-3 py-2 btn-gallery"
            onClick={handleFilterKeyChange(".category-a")}
          >
            Category A
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="shadow-sm rounded-pill px-3 py-2 btn-gallery"
            onClick={handleFilterKeyChange(".category-b")}
          >
            Category B
          </motion.span>
        </div>
        <div className="row" ref={gridRef}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-6 col-md-4 grid-item category-a p-1"
          >
            <div className="overflow-hidden rounded des">
              <img
                className="img-fluid"
                src="https://fakeimg.pl/500x500"
                alt="Rhinoceros"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-6 col-md-4 grid-item category-b p-1"
          >
            <div className="overflow-hidden rounded des">
              <img
                className="img-fluid"
                src="https://fakeimg.pl/500x500"
                alt="Elephant"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-6 col-md-4 grid-item category-a p-1"
          >
            <div className="overflow-hidden rounded des">
              <img
                className="img-fluid"
                src="https://fakeimg.pl/500x500"
                alt="Rhinoceros"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-6 col-md-4 grid-item category-b p-1"
          >
            <div className="overflow-hidden rounded des">
              <img
                className="img-fluid"
                src="https://fakeimg.pl/500x500"
                alt="Rhinoceros"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-6 col-md-4 grid-item category-a p-1"
          >
            <div className="overflow-hidden rounded des">
              <img
                className="img-fluid"
                src="https://fakeimg.pl/500x500"
                alt="Rhinoceros"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-6 col-md-4 grid-item category-b p-1"
          >
            <div className="overflow-hidden rounded des">
              <img
                className="img-fluid"
                src="https://fakeimg.pl/500x500"
                alt="Rhinoceros"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-6 col-md-4 grid-item category-a p-1"
          >
            <div className="overflow-hidden rounded des">
              <img
                className="img-fluid"
                src="https://fakeimg.pl/500x500"
                alt="Rhinoceros"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="col-6 col-md-4 grid-item category-b p-1"
          >
            <div className="overflow-hidden rounded des">
              <img
                className="img-fluid"
                src="https://fakeimg.pl/500x500"
                alt="Rhinoceros"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IsotopeGrid;
