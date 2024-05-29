import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
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
    <header id="header">
      <nav className="navbar fixed-top navbar-expand-lg bg-light shadow">
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink
                className="nav-link"
                onClick={(e) => handleNavLinkClick(e, "#services")}
              >
                Serviços
              </NavLink>
              <NavLink
                className="nav-link"
                onClick={(e) => handleNavLinkClick(e, "#about")}
              >
                Sobre
              </NavLink>
              <NavLink
                className="nav-link"
                onClick={(e) => handleNavLinkClick(e, "#gallery")}
              >
                Galeria
              </NavLink>
              <NavLink
                className="nav-link"
                onClick={(e) => handleNavLinkClick(e, "#blog")}
              >
                Blog
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
