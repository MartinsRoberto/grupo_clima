import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

const ServiceItem = ({ imgSrc, title, description, link, linkState }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 300 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="col-md-4"
    >
      <div className="service-item shadow p-4 rounded d-flex justify-content-center align-items-center flex-column mb-5 bg-white">
        <img src={imgSrc} alt="" className="mb-3 img-fluid" width="50" />
        <h5 className="mb-3 text-color-blue">{title}</h5>
        <p className="text-center text-secondary">{description}</p>
        <NavLink className="btn btn-primary" to={link} state={linkState}>
          Veja mais
        </NavLink>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
