import React from "react";

import { FaCheck } from "react-icons/fa6";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <img
              className="img-fluid mb-5 mb-lg-0 rounded"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Blue_Wildebeest%2C_Ngorongoro.jpg/1200px-Blue_Wildebeest%2C_Ngorongoro.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center align-items-lg-start ">
            <h2 className="text-center text-lg-start text-color-blue">About</h2>
            <h5 className="text-center text-lg-start mb-5 fw-light">
              About About About About About About
            </h5>
            <p className="text-center text-lg-start ">
              Air conditioning services encompass a wide range of activities
              related to the installation, maintenance, repair, and replacement
              of ACs.
            </p>
            <h5 className="text-center text-lg-start text-color-blue mb-4">
              Why us?
            </h5>
            <ul>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Motivo A
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Motivo A
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Motivo A
              </li>
              <li className="d-flex justify-content-center justify-content-lg-start align-items-center gap-2">
                <FaCheck />
                Motivo A
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
