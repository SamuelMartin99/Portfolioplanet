import React from "react";
import { mockup1, mockup2, mockup3 } from "../assets/images"; // Importaciones correctas

const projects = [
  {
    title: "Portfolio 3D Showcase",
    description: "A dynamic and interactive 3D portfolio built using React and Three.js.",
    imgSrc: mockup1, 
    imgAlt: "Mockup Project 1", 
  },
  {
    title: "E-commerce Store",
    description: "Full responsive e-commerce platform, built using CMS Shopify.",
    imgSrc: mockup2,
    imgAlt: "Mockup Project 2",
  },
  {
    title: "Local Business Website",
    description: "Optimized website tailored for local businesses.",
    imgSrc: mockup3,
    imgAlt: "Mockup Project 3",
  },
];

const Examples = () => {
  return (
    <section className="relative w-full text-center flex flex-col justify-center items-center gap-10 px-4 py-16 sm:py-24 md:py-32 bg-gray-800">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter text-white">
        Every Project is a New Challenge
      </h2>
      <p className="text-normal sm:text-lg md:text-xl font-light tracking-tight text-gray-400 max-w-xl">
        Design, Code, Learn, Repeat.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg w-full">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.imgSrc}
                alt={project.imgAlt}
                className="object-cover w-full h-full transition-opacity hover:opacity-90"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm md:text-base font-light text-gray-300 mt-2">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Examples;
