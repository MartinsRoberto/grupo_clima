import React from "react";
import "./Team.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  InstagramEmbed,
  YouTubeEmbed,
  TikTokEmbed,
} from "react-social-media-embed";

const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-color-blue"
            >
              Siga-nos no Instagram
            </motion.h2>
            <motion.h5
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5 fw-light"
            >
              Mantenha-se atualizado com nossos projetos
            </motion.h5>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center text-lg-start"
            >
              Siga nosso Instagram para ver os bastidores, projetos recentes e
              dicas valiosas sobre sistemas de ar condicionado. Não perca nossa
              jornada de inovação e excelência!
            </motion.p>
          </div>
          <div className="col-lg-7">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed
                url="https://www.instagram.com/p/CUbHfhpswxt/"
                width={328}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
