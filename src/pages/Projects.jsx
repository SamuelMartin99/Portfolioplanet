import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto bg-gray-800 text-white px-4 py-8 mt-30">
      <h1 className="hero-text text-white mt-20">
        Mis
        <span className="blue-gradient_text font-semibold drop-shadow-md">
          {" "}
          Proyectos
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-gray-400">
        <p>
          Bienvenido a mi portafolio de proyectos. Aquí encontrarás una selección
          de los trabajos en los que he estado involucrado, desde aplicaciones web
          y diseños de interfaz hasta soluciones de comercio electrónico. Cada
          proyecto refleja mi enfoque en crear experiencias digitales efectivas y
          modernas, utilizando tecnologías como React, Shopify, y más. Explora los
          detalles de cada proyecto para ver cómo puedo ayudarte a llevar tus ideas
          al siguiente nivel.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full bg-gray-800 p-5 rounded-xl" key={project.name}>
            <div className="block-container w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
              <div className={`rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold text-white">
                {project.name}
              </h4>
              <p className="mt-2 text-gray-400">{project.description}</p>

              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cyan-400 hover:text-cyan-300 transition duration-300"
                >
                  Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-700" />

      <CTA />
    </section>
  );
};

export default Projects;
