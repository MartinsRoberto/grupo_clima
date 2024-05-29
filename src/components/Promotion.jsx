import React from "react";
import "./Promotion.css";

const Promotion = () => {
  return (
    <section id="promotion">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 text-left ">
            <h2 className="text-center text-lg-start mb-5 text-color-green">
              24/7 SERVICES
            </h2>
            <h5 className="text-center text-lg-start mb-5 text-white">
              Air conditioning services encompass a wide range of activities
              related to the installation, maintenance, repair, and replacement
              of ACs.
            </h5>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12  text-white">
            <div className="p-4 rounded promo">
              <h2 className="text-center text-lg-start">Best Offer!</h2>
              <h3 className="text-center text-lg-start">
                Sunday Deal 50% Off<span>UPTO</span>
              </h3>
              <p className="text-center text-lg-start">
                *installation, maintenance, repair, and replacement of ACs.
              </p>
              <a href="#contact" className="btn btn-secondary d-block">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
