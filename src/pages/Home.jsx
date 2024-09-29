import React, { Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./Home.css";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import Slack from "../components/Slack.jsx";
import Examples from "../components/Examples.jsx";
import backgroundImage from "../assets/images/background-image.jpg"; // Asegúrate de ajustar el nombre de tu imagen
import Footer from "../components/Footer.jsx";

const Orbit = lazy(() => import("../models/Orbit"));

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-16">
      {/* Canvas de fondo con Orbit */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <Orbit />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.1}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Contenido principal superpuesto */}
      <div className="relative z-10 flex flex-col">
        {/* Sección Héroe */}
        <section className="relative flex flex-col items-center justify-center h-[80vh] overflow-hidden px-4 py-16 sm:py-24 md:py-32 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white"
          >
            Building the Future in the Web
          </motion.h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl font-light">
            Crafting unique digital experiences with React, Three.js, and Tailwind CSS.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0"
          >
            <button
              onClick={() => navigate("/projects")}
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-transparent border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-medium transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white"
            >
              Get in Touch
            </button>
          </motion.div>
        </section>

        {/* Sección de Información */}
        <section className="flex flex-col items-center justify-center py-10 px-6 text-center space-y-6 bg-gray-800">
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl font-light">
            I'm a passionate web developer focused on creating user experiences. Let's work together to build something amazing.
          </p>

          <div className="flex space-x-4">
            <button
              onClick={() => navigate("/projects")}
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-transform transform hover:scale-105"
            >
              Learn More
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-transform transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </section>

        {/* Sección Tecnologías */}
        <Slack />

        {/* Sección Ejemplos de proyectos */}
        <Examples />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};


export default Home;
