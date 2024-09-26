import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Añadimos clase activa si la ruta actual coincide
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1" // Estilo para ruta activa
      : "text-white hover:text-cyan-300 transition-all"; // Estilo para rutas inactivas
  };

  // Evitar scroll en el body cuando el menú está abierto
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <nav className="bg-transparent fixed top-0 w-full z-50 mt-30">
      {/* Contenedor con ancho máximo y padding uniforme */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 mb-20">
        {/* Logo */}
        <Link className="text-white font-bold" to="/">
          Samudev
        </Link>

        {/* Botón para abrir el menú en dispositivos móviles */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Menú para dispositivos grandes */}
        <ul className="hidden md:flex md:items-center md:space-x-8">
          <li>
            <Link to="/about" className={getLinkClass("/about")}>
              Sobre mí
            </Link>
          </li>
          <li>
            <Link to="/projects" className={getLinkClass("/projects")}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass("/contact")}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Sidebar para dispositivos móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      <motion.div
        className="fixed top-0 right-0 h-full bg-gray-900 text-white w-64 z-50 p-8 flex flex-col space-y-8 shadow-lg"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        role="navigation"
        aria-label="Menú de navegación"
      >
        <button
          className="text-white text-2xl self-end focus:outline-none"
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar menú"
        >
          ✕
        </button>
        <ul className="space-y-6 text-lg">
          <li>
            <Link
              to="/about"
              className={getLinkClass("/about")}
              onClick={() => setIsOpen(false)}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={getLinkClass("/projects")}
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={getLinkClass("/contact")}
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default NavBar;
