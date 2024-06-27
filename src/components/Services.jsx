import React from "react";
import "./Services.css";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
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
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <ServiceItem
            imgSrc="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg"
            title="Instalação"
            description="Instalação de novos sistemas de ar condicionado ou substituição, assegurando técnicas adequadas e conformidade com os códigos de construção."
            link="/services/install"
            linkState={{ type: 1 }}
          />
          <ServiceItem
            imgSrc="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg"
            title="PMOC (Plano de Manutenção Operação e Controle)"
            description="Implementação e execução de PMOC conforme normas regulatórias para garantir a qualidade do ar e o desempenho eficiente do sistema de climatização, incluindo inspeções regulares e relatórios detalhados."
            link="/services/cleaning"
            linkState={{ type: 3 }}
          />
          <ServiceItem
            imgSrc="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg"
            title="Limpeza"
            description="Serviço profissional de limpeza de ar condicionado para melhorar a qualidade do ar interno, removendo poeira, ácaros e contaminantes, proporcionando um ambiente mais saudável."
            link="/services/maintance"
            linkState={{ type: 2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
