import React, { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./Home.css";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const Rocket = lazy(() => import("../models/Rocket"));
const Orbit = lazy(() => import("../models/Orbit"));

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-16">
      {" "}
      {/* Ajusta el padding-top para compensar el NavBar fijo */}
      {/* Canvas de fondo con Orbit */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {" "}
        {/* Bloquea eventos del mouse */}
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <Orbit />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.05}
            />{" "}
            {/* Control de rotación automática */}
          </Suspense>
        </Canvas>
      </div>
      {/* Contenido principal superpuesto */}
      <div className="relative z-10 flex flex-col">
        {/* Sección de héroe con Canvas */}
        <section className="relative flex items-center justify-center h-[80vh] overflow-hidden mt-30">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4 bg-opacity-30 bg-gray-900">
            <Link to="/contact">
              <motion.h1
                initial={{ y: -10 }}
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-40 text-4xl md:text-6xl font-bold text-white transition duration-300 transform hover:scale-110 hover:shadow-glow"
              >
                Samudev
              </motion.h1>
            </Link>
            {/*   <motion.h1 className="font-bold text-4xl md:text-6xl font-blur text-grey-800 ">
              Samudev
            </motion.h1 >*/}

            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 hover:text-yellow-400 transition duration-300 transform hover:scale-105"
            ></motion.h1>
            <p className="text-lg md:text-2xl text-gray-300 !mt-28 ">
              Front End Developer
            </p>
            <button
              onClick={() => navigate("/about")}
              className="bg-transparent border-2 border-white text-white hover:bg-gray-300 hover:text-gray-700 transition-all duration-300 px-6 py-2 rounded-full transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Conoce +
            </button>
          </div>
        </section>

        {/* Sección de Información */}
        <section className="flex flex-col items-center justify-center py-10 px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Soy Samuel</h2>
          <p className="text-md md:text-lg text-gray-300 max-w-2xl">
            Desarrollador web apasionado por crear experiencias digitales
            atractivas y funcionales. Conozca más sobre mi trabajo y cómo puedo
            ayudarle.
          </p>

          <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button
              onClick={() => navigate("/projects")}
              className="bg-transparent border-2 border-white text-white hover:bg-gray-300 hover:text-gray-700 transition-all duration-300 px-6 py-2 rounded-full transform hover:scale-105 shadow-md"
            >
              Conoce sobre mi trabajo
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="bg-transparent border-2 border-white text-white hover:bg-gray-300 hover:text-gray-700 transition-all duration-300 px-6 py-2 rounded-full transform hover:scale-105 shadow-md"
            >
              Contáctame
            </button>
          </div>
        </section>

        {/* Componente Footer */}
        <Footer />
      </div>
    </div>
  );
};

// Componente Footer
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-4 flex justify-center items-center border-t border-gray-800">
    <p className="text-center">
      © {new Date().getFullYear()} Desarrollador Web Front End. Todos los
      derechos reservados.
    </p>
  </footer>
);

export default Home;
