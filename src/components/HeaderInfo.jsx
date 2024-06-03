import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const HeaderInfo = () => {
  return (
    <div className="fixed-top bg-color-green" style={{ height: "32px" }}>
      <div className="d-flex justify-content-center align-items-center h-100 gap-3">
        <div className="d-none d-md-flex justify-content-center align-items-center">
          <a
            className="text-white  fw-bold text-decoration-none"
            href="https://wa.me/5511949109358?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento."
          >
            <FaWhatsapp style={{ fontSize: "24px" }} className="me-1"/>
            (11) 94910-9358
          </a>
        </div>
        <div className="text-white d-none d-md-flex justify-content-center align-items-center fw-bold">
          <FaEnvelope style={{ fontSize: "20px" }} className="me-1"/>
          comercial@grupoclima.com.br
        </div>
        <div className="">
          <a className="text-white" href="https://www.instagram.com/grupoclim/">
            <FaFacebook style={{ fontSize: "22px" }} />
          </a>
        </div>
        <div className="">
          <a className="text-white" href="https://www.instagram.com/grupoclim/">
            <FaInstagram style={{ fontSize: "24px" }} />
          </a>
        </div>
        <div className="">
          <a className="text-white" href="https://www.instagram.com/grupoclim/">
            <FaYoutube style={{ fontSize: "26px" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
