import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import "./Gallery.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import limpUm from "../assets/Galery/limpUm.jpg"
import limpDois from "../assets/Galery/limpDois.jpg"
import limpTres from "../assets/Galery/limpTres.jpg"
import limpQuatro from "../assets/Galery/limpQuatro.jpg"
import projUm from "../assets/Galery/ProjUm.jpg"
import projDois from "../assets/Galery/ProjDois.jpg"
import projTres from "../assets/Galery/ProjTres.jpg"
import projQuatro from "../assets/Galery/ProjQuatro.jpg"
import projCinco from "../assets/Galery/ProjCinco.jpg"

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
            <h2 className="text-color-blue">Explore nossa Galeria</h2>
            <h5 className="mb-5 fw-light">
            Descubra a excelência em cada detalhe dos nossos projetos de Limpeza, Manutenção e Instalação.
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
            Mostrar Tudo
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="shadow-sm rounded-pill px-3 py-2 btn-gallery"
            onClick={handleFilterKeyChange(".category-a")}
          >
            Limpeza
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="shadow-sm rounded-pill px-3 py-2 btn-gallery"
            onClick={handleFilterKeyChange(".category-b")}
          >
            Projetos
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
                src={limpUm}
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
                src={limpDois}
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
                src={limpTres}
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
                src={limpQuatro}
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
                src={projUm}
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
                src={projDois}
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
                src={projTres}
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
                src={projQuatro}
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
