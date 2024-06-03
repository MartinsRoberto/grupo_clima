import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaRegEnvelope,
} from "react-icons/fa";

const HeaderInfo = () => {
  return (
    <div className="fixed-top bg-color-green text-white  d-flex justify-content-center align-items-center gap-5">
      <div className="d-none d-md-flex justify-content-between align-items-center gap-3">
        <a className="fs-5" href="https://www.instagram.com/grupoclim/">
          <FaFacebook className="text-white" style={{fontSize: "24px"}}/>
        </a>
        <a className="fs-5" href="https://www.instagram.com/grupoclim/">
          <FaInstagram className="text-white" style={{fontSize: "26px"}}/>
        </a>
        <a className="fs-5" href="https://www.instagram.com/grupoclim/">
          <FaYoutube className="text-white" style={{fontSize: "28px"}}/>
        </a>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <a
          className="text-decoration-none text-white fw-bold"
          href="https://wa.me/5511949109358?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento."
        >
          <FaWhatsapp className="fs-5 me-2  " />
          (11) 94910-9358
        </a>
        <span className="fw-bold">
          <FaRegEnvelope className="fs-5 me-2 " />
          comercial@grupoclima.com.br
        </span>
      </div>
    </div>
  );
};

export default HeaderInfo;
