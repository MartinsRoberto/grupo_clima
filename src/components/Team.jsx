import React from "react";
import "./Team.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team" className="bg-light">
      <div className="container ">
        <div className="row bg-white rounded shadow py-5">
          <div className="col-lg-6 d-flex flex-column align-items-center align-items-lg-center  justify-content-center">
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
              className="mb-5 fw-light text-center"
            >
              Mantenha-se atualizado com nossos projetos
            </motion.h5>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              Siga nosso Instagram para ver os bastidores, projetos recentes e
              dicas valiosas sobre sistemas de ar condicionado. Não perca nossa
              jornada de inovação e excelência!
            </motion.p>
          </div>
          <div className="col-lg-6">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe
                className="border rounded"
                src="https://www.instagram.com/p/CFwG1kHssFh/embed"
                width=""
                height="440"
                frameBorder="0"
                scrolling="no"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
