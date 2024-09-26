import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three'; // Importa el tipo de material
import rocketScene from '../assets/3d/cohete.glb'; // Ruta al archivo GLTF

const Rocket = (props) => {
  const group = useRef();
  const { nodes } = useGLTF(rocketScene); // Cargar el modelo GLTF
  let time = 0; // Variable de tiempo para calcular el movimiento

  // Definir nuevos materiales con colores personalizados
  const materialBAJA = new MeshStandardMaterial({ color: '#FF6347' }); // Color tomate
  const materialCOPA1 = new MeshStandardMaterial({ color: '#4682B4' }); // Azul acero
  const materialBlinn1 = new MeshStandardMaterial({ color: '#FFD700' }); // Dorado
  const materialLambert1 = new MeshStandardMaterial({ color: '#32CD32' }); // Verde lima

  // Animación para movimiento moderno y dinámico
  useFrame(() => {
    if (group.current) {
      time += 0.02; // Incrementa el tiempo para cambiar la posición

      // Movimiento en espiral
      const radius = 3 + Math.sin(time * 0.5) * 1.5; // Radio dinámico de la espiral
      group.current.position.x = Math.cos(time) * radius; // Movimiento circular en X
      group.current.position.y = Math.sin(time * 2) * 1.5; // Movimiento ondulatorio en Y
      group.current.position.z = Math.sin(time) * radius; // Movimiento en espiral en Z

      // Simulación de "slingshot"
      if (Math.sin(time) > 0.95) {
        // Acelerar al alcanzar cierto punto en la espiral
        group.current.position.x += Math.random() * 0.1 - 0.05; // Cambios aleatorios de posición
        group.current.position.y += Math.random() * 0.1 - 0.05;
        group.current.position.z += Math.random() * 0.1 - 0.05;
      }

      // Rotación dinámica para simular el movimiento del cohete
      group.current.rotation.x = Math.sin(time) * 0.5;
      group.current.rotation.z = Math.cos(time) * 0.5;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.08, 0.08, 0.08]} // Ajusta la escala a un tamaño mayor
      rotation={[0, Math.PI / 2, 0]} // Rotación inicial del cohete
    >
      <group scale={1}>
        <group position={[0.049, 7.242, 0]} scale={1.566}>
          {/* Aplicar los nuevos materiales con colores personalizados */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_BAJA_0.geometry}
            material={materialBAJA}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_COPA1_0.geometry}
            material={materialCOPA1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_blinn1_0.geometry}
            material={materialBlinn1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_lambert1_0.geometry}
            material={materialLambert1}
          />
        </group>
        {/* Resto de tu estructura del cohete */}
      </group>
    </group>
  );
};

export default Rocket;
