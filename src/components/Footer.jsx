import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Footer.css";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    navigate("/", { replace: false }); // Navegar para a rota raiz

    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer id="footer" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center text-lg-start text-color-green mb-4">
              Fale conosco
            </h3>
            <div className="text-white d-flex flex-column justify-content-center justify-content-lg-start">
              <ul className="text-center text-lg-start">
                <li className="d-flex flex-column">
                  <span className="h5">WhatsApp:</span>
                  <a className="h6 fw-light text-decoration-none" href="https://wa.me/5511949109358?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+or%C3%A7amento.">(11) 94910-9358</a>
                </li>
              </ul>
              <ul className="text-center text-lg-start">
                <li className="d-flex flex-column mb-3 ">
                  <span className="h5">Email:</span>
                  <span className="h6 fw-light">
                    comercial@grupoclima.com.br
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="text-center text-lg-start text-color-green mb-4">
              Páginas
            </h3>
            <ul className="text-center text-lg-start d-flex flex-column gap-2">
              <li>
                <NavLink
                  className="h5 fw-light text-decoration-none text-white link"
                  onClick={(e) => handleNavLinkClick(e, "#services")}
                >
                  Serviços
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="h5 fw-light text-decoration-none text-white link"
                  onClick={(e) => handleNavLinkClick(e, "#about")}
                >
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="h5 fw-light text-decoration-none text-white link"
                  onClick={(e) => handleNavLinkClick(e, "#gallery")}
                >
                  Galeria
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="h5 fw-light text-decoration-none text-white link"
                  onClick={(e) => handleNavLinkClick(e, "#blog")}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="text-center text-lg-start text-color-green mb-4 ">
              Redes sociais
            </h3>
            <ul className="text-center text-lg-start d-flex justify-content-center justify-content-lg-start gap-3">
              <li>
                <a href="https://www.instagram.com/grupoclim/">
                  <FaInstagram className="text-white display-6 midia" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/grupoclim/">
                  <FaYoutube className="text-white display-6 midia" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/grupoclim/">
                  <FaFacebook className="text-white display-6 midia" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="mt-3 text-white text-center text-lg-start">
            <p className="mb-0">Segunda à sexta das 08h as 18h.</p>
            <p className="mb-0">
            Rua Júlio Rebollo Perez, 215 - Jardim Peri Peri, São Paulo - SP, 05538-010
            </p>
            <p className="mb-0">
              Atendemos as regiões de São Paulo (capital), grande São Paulo e
              Litoral.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
