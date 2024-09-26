import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto p-8 bg-gray-800 text-white mt-30">
      <h1 className="subhead-text text-4xl font-bold mt-20">
        Bienvenidos!
        <span className="blue-gradient_text font-semibold drop-shadow ml-2"></span>
      </h1>

      <div className="mt-5 text-gray-300 space-y-4">
        <p>
          Motivado por el desarrollo y programacion, me
          encuentro realizando distintos proyectos personales y comerciales. En
          mis trabajos me gusta aplicar las mejores practicas, creando
          interfaces interactivas y creativas!
        </p>
      </div>

      <div className="py-10">
        <h3 className="subhead-text text-3xl font-semibold">Mis Habilidades</h3>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {skills.map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="relative block-container w-20 h-20 bg-gray-800 rounded-xl shadow-md transition-transform hover:scale-105 group"
            >
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-12 h-12 object-cover"
                />
              </div>
              {/* Tooltip - Nombre de la habilidad */}
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text text-3xl font-semibold">Experiencia</h3>
        <div className="mt-5 text-gray-300 space-y-4">
          <p>
            <span className="font-semibold">
              Desarrollador Front-End Autodidacta
            </span>{" "}
            con conocimientos en tecnologías como{" "}
            <span className="font-semibold">
              React, Three.js, Tailwind CSS, HTML, CSS, y JavaScript.
            </span>
          </p>
        </div>

        <div className="mt-12">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-cover"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  background: "#1F2937", // Fondo oscuro para el contenido de la línea de tiempo
                  color: "#FFF", // Texto claro
                  borderBottom: `4px solid ${experience.iconBg}`,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-gray-300 font-medium">
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-gray-300 font-normal text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />
      <CTA />
    </section>
  );
};

export default About;
