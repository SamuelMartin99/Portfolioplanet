import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        {/* Enlaces rápidos */}
        <nav className="text-center">
          <Link to="/about" className="px-4 hover:text-white">Sobre mí</Link>
          <Link to="/projects" className="px-4 hover:text-white">Proyectos</Link>
          <Link to="/contact" className="px-4 hover:text-white">Contacto</Link>
        </nav>

        {/* Redes sociales */}
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/SamuelMartin99" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/samuel-martin-schulmaester/" className="hover:text-white">
            <FaLinkedin />
          </a>
        </div>

        {/* Derechos reservados */}
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
