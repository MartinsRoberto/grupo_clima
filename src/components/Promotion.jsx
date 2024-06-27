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
              Ofertas imperdíveis para você!
              </h2>
              <h5 className="text-center text-lg-start mb-5 text-white">
              Aproveite descontos exclusivos em serviços de limpeza, manutenção e instalação. Não perca a oportunidade de deixar seu espaço impecável com nossos preços especiais!
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
              <h3 className="text-center text-lg-start">
              Promoção de inverno: Limpeza de ar-condicionado com desconto
              </h3>
              <p className="text-center text-lg-start">
              Prepare-se para os dias frios! Garanta um ar mais puro e saudável dentro de casa com nossa oferta especial de limpeza de ar-condicionado. Descontos exclusivos para manter seu conforto e saúde durante todo o inverno!
              </p>
              <a href="#contact" className="btn btn-secondary d-block">
                Confira Agora
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Promotion;
