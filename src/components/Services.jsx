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
              Serviços disponíveis
            </h2>
            <h5 className="text-center mb-5 fw-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              officia blanditiis dolorem deserunt eum placeat doloribus vero,
              quibusdam ex repellat vel, iure, dolore animi libero velit
              incidunt asperiores suscipit et?
            </h5>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <ServiceItem
            imgSrc="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg"
            title="Instalação"
            description="New AC construction or replacement, ensuring proper techniques and building code compliance."
            link="/services/install"
            linkState={{ type: 1 }}
          />
          <ServiceItem
            imgSrc="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg"
            title="Manutenção corretiva e preventiva"
            description="New AC construction or replacement, ensuring proper techniques and building code compliance."
            link="/services/maintance"
            linkState={{ type: 2 }}
          />
          <ServiceItem
            imgSrc="https://zrtechsolutions.com/demo/html/airconditioning/assets/images/icons/s1.svg"
            title="Limpeza"
            description="New AC construction or replacement, ensuring proper techniques and building code compliance."
            link="/services/cleaning"
            linkState={{ type: 3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
