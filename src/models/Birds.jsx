import React, { useRef, useEffect, useState } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import birdScene from "../assets/3d/bird_animated.glb";

const Birds = () => {
  const birdRef = useRef();
  const [scale, setScale] = useState(0.3); // Estado para la escala del pájaro

  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions && actions['Take 001']) {
      actions['Take 001'].play(); // Reproducir la animación del pájaro
    }

    // Función para ajustar la escala según el tamaño de la pantalla
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setScale(0.15); // Escala más pequeña para pantallas pequeñas
      } else {
        setScale(0.18); // Escala normal para pantallas más grandes
      }
    };

    // Configura el tamaño inicial y escucha los cambios en el tamaño de la ventana
    handleResize();
    window.addEventListener('resize', handleResize);

    // Limpia el evento cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, [actions]);


  /* 
  useFrame(({ clock }) => {
    if (!birdRef.current) return;
    const speed = 0.05;
    // Movimiento aleatorio controlado
    birdRef.current.position.x += speed * Math.cos(clock.elapsedTime);
    
    birdRef.current.position.z += speed * Math.sin(clock.elapsedTime);
     
    // Rotación suave hacia la dirección del movimiento
    const targetPosition = new THREE.Vector3(
      birdRef.current.position.x + speed * 8,
      birdRef.current.position.y,
      birdRef.current.position.z
    );
    birdRef.current.lookAt(targetPosition);
    birdRef.current.rotation.y = 2; // Asegurar que siempre esté orientado en una dirección

  });
  */

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.5 + 5;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh
      position={[6, 9, -9]}
      scale={[scale, scale, scale]} // Usa el estado de escala
      ref={birdRef}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default Birds;
