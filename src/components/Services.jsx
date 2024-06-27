import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ServiceItem from "./ServiceItem";

import "./Services.css";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 300 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-md-8"
          >
            <h2 className="text-center text-color-blue ">
              Soluções completas para seu sistema de ar condicionado: Limpeza,
              Manutenção e PMOC
            </h2>
            <h5 className="text-center mb-5 fw-light">
              Descubra como podemos cuidar do seu sistema de ar condicionado com
              nossos serviços especializados. Realizamos limpeza profunda para
              garantir ar limpo e saudável, manutenção corretiva para resolver
              problemas rapidamente e manutenção preventiva para evitar falhas.
              Além disso, oferecemos contratos PMOC para manter seu ambiente em
              conformidade com as normas, proporcionando segurança e eficiência
              contínua. Confie na nossa experiência e deixe-nos cuidar do seu
              conforto com soluções abrangentes e eficazes.
            </h5>
          </motion.div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <ServiceItem
            imgSrc="https://cdn-icons-png.flaticon.com/512/2344/2344483.png"
            title="Manutenção"
            description="Manutenção de ar condicionado, assegurando técnicas adequadas, eficiência operacional, desempenho ideal, longevidade dos equipamentos e conformidade com os códigos de construção."
            link="/services/maintance"
            linkState={{ type: 1 }}
          />
          <ServiceItem
            imgSrc="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg"
            title="Limpeza"
            description="Serviço profissional de limpeza de ar condicionado para melhorar a qualidade do ar interno, removendo poeira, ácaros e contaminantes, proporcionando um ambiente mais saudável."
            link="/services/cleaning"
            linkState={{ type: 2 }}
          />
          <ServiceItem
            imgSrc="https://cdn-icons-png.flaticon.com/512/4331/4331899.png "
            title="PMOC"
            description="(Plano de Manutenção Operação e Controle) Implementação do PMOC para garantir qualidade do ar e eficiência do sistema de climatização, com inspeções regulares e relatórios detalhados."
            link="/services/pmoc"
            linkState={{ type: 3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
