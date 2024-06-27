import React from "react";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";
import mascote from "../assets/Mascote.png"

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
              src={mascote}
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
              Sobre-nós
            </h2>
            <h5 className="text-center text-lg-start mb-5 fw-light">
              Quem somos e o que fazemos
            </h5>
            <p className="text-center text-lg-start">
              Serviços de ar condicionado englobam uma ampla gama de atividades
              relacionadas à instalação, manutenção, reparo e substituição de ACs.
            </p>
            <h5 className="text-center text-lg-start text-color-blue mb-4">
              Por que escolher-nos?
            </h5>
            <ul>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Compromisso com a qualidade do ar
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Técnicos qualificados e experientes
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Serviços personalizados conforme suas necessidades
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Conformidade com normas e regulamentos
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );  
};

export default About;
