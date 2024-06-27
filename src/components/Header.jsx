import React, { useRef } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import HeaderInfo from "./HeaderInfo";

const Header = () => {
  const navigate = useNavigate();
  const navRef = useRef(null);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    navigate("/", { replace: false }); // Navegar para a rota raiz
  
    // Rolar instantaneamente para o topo
    window.scrollTo(0, 0);
  
    // Rolar suavemente para o elemento alvo após um pequeno atraso
    setTimeout(() => {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = 88; // Ajuste este valor conforme necessário
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  
    // Fechar o menu no modo mobile
    const navBar = navRef.current;
    if (navBar && navBar.classList.contains("show")) {
      navBar.classList.remove("show");
    }
  };

  return (
    <header id="header">
      <HeaderInfo />
      <nav className="navbar fixed-top navbar-expand-lg bg-light shadow py-2" style={{ marginTop: "32px"}}>
        <div className="container">
          <NavLink
            className="navbar-brand"
            onClick={(e) => handleNavLinkClick(e, "#hero")}
          >
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" ref={navRef}>
            <div className="navbar-nav ms-auto">
              <NavLink
                className="nav-link me-0 me-md-5 fw-semibold"
                onClick={(e) => handleNavLinkClick(e, "#services")}
              >
                Serviços
              </NavLink>
              <NavLink
                className="nav-link me-0 me-md-5 fw-semibold"
                onClick={(e) => handleNavLinkClick(e, "#about")}
              >
                Sobre
              </NavLink>
              <NavLink
                className="nav-link me-0 me-md-5 fw-semibold"
                onClick={(e) => handleNavLinkClick(e, "#gallery")}
              >
                Galeria
              </NavLink>
              <NavLink
                className="nav-link me-0 me-md-5 fw-semibold"
                onClick={(e) => handleNavLinkClick(e, "#blog")}
              >
                Blog
              </NavLink>
              <button className="btn btn-primary">Fale conosco</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
