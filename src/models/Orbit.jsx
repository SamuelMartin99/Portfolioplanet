import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import orbitScene from "../assets/3d/orbiting.glb";

const Orbit = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(orbitScene);

  // Evento para capturar el movimiento del mouse
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    updateRotation(clientX, clientY);
  };

  // Evento para capturar el movimiento en pantallas táctiles
  const handleTouchMove = (event) => {
    const touch = event.touches[0]; // Captura el primer toque
    updateRotation(touch.clientX, touch.clientY);
  };

  // Actualiza la rotación del objeto
  const updateRotation = (x, y) => {
    const rotationX = (y / window.innerHeight) * 2 * Math.PI;
    const rotationY = (x / window.innerWidth) * 2 * Math.PI;

    if (group.current) {
      group.current.rotation.x = rotationX - Math.PI / 2; // Ajusta según tu preferencia
      group.current.rotation.y = rotationY - Math.PI / 2;
    }
  };

  // Animación continua del modelo (rotación constante)
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.2, 0.2, 0.2]}
      position={[0, 0, -50]}
      onPointerMove={handleMouseMove}  // Movimiento del mouse
      onTouchMove={handleTouchMove}   // Movimiento táctil
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ring_1_Ring_0.geometry}
        material={materials.Ring}
        position={[-160.696, 8.557, 70.844]}
        rotation={[-1.546, -0.884, 2.545]}
        scale={1.022}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Raket_1_Raket_0.geometry}
        material={materials.Raket}
        position={[0, -59.286, 0]}
        rotation={[0, 1.236, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Subdivision_Surface_Subdivision_Surface1_0.geometry}
        material={materials["Subdivision_Surface.1"]}
        position={[6.23, 27.455, 6.83]}
        rotation={[0.015, -0.11, -2.157]}
      />
    </group>
  );
};

export default Orbit;
