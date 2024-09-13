import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState, useRef } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Birds from "../models/Birds";
import Plane from "../models/Plane";
import { Sky } from "../models/Sky";
import * as THREE from "three";
import HomeInfo from "../components/HomeInfo";

// Componente de cámara personalizada para suavidad
const SmoothCamera = () => {
  const cameraRef = useRef();
  const targetRef = useRef(new THREE.Vector3(0, 0, 0)); // Posición objetivo de la cámara

  useFrame((state) => {
    if (!cameraRef.current) return;

    // Obtén la posición del ratón normalizada
    const { mouse } = state;
    const targetX = mouse.x * 5; // Ajusta el rango de movimiento
    const targetY = mouse.y * 5;

    // Interpolación suave hacia la nueva posición objetivo
    targetRef.current.x = THREE.MathUtils.lerp(
      targetRef.current.x,
      targetX,
      0.95
    ); // Ajusta la velocidad con el factor (0.05)
    targetRef.current.y = THREE.MathUtils.lerp(
      targetRef.current.y,
      targetY,
      0.95
    );

    // Actualiza la posición de la cámara suavemente
    cameraRef.current.position.x = targetRef.current.x;
    cameraRef.current.position.y = targetRef.current.y;
    cameraRef.current.lookAt(0, 0, 0); // Mira al centro de la escena (puedes ajustar esto)
  });

  return (
    <perspectiveCamera
      ref={cameraRef}
      position={[0, 2, 5]} // Posición inicial de la cámara
      fov={75} // Campo de visión
      near={0.1} // Plano cercano
      far={1000} // Plano lejano
    />
  );
};

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  //let islandScale = [0.2, 0.2, 0.2]; // Ejemplo de escala
  //let islandPosition = [5, 0, -20]; // Ejemplo de posición
  let islandRotation = [Math.PI / 7, 1, 0]; // Ejemplo de rotación

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // Si el ancho de la pantalla es menor que 768px, ajusta la escala y la posición
    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -1, 1.5];
    } else {
      screenScale = [1.6, 1.6, 1.6];
      screenPosition = [0, -1, -1];
    }
    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <SmoothCamera /> {/* Integración de la cámara personalizada */}
          <directionalLight />
          <ambientLight intensity={0.8} />
          <spotLight />
          <hemisphereLight />
          <Birds />
          
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0.2, 14, 0.1]}
            scale={biplaneScale}
          />
          <Sky isRotating={isRotating} />
          <Birds />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
