/* eslint-disable react/no-unknown-property */

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/island.glb";
import { a } from "@react-spring/three";


const Island = ({ 
    isRotating,
    setIsRotating,
    currentStage,
    setCurrentStage,
    currentFocusPoint,
     ...props }) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.00125
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  
   // Touch events for mobile devices
  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  
  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
  
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
  
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  } 

  

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);
  

  
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
  

  
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp, handleTouchEnd,handleTouchMove,handleTouchStart]); // Agrega todas las dependencias necesarias

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
  
      if (Math.abs(rotationSpeed.current) < 0.002) {
        rotationSpeed.current = 0;
      } else {
        const rotation = islandRef.current.rotation.y;
  
        const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  
        // Función para verificar si el valor está cerca de un objetivo con tolerancia
        const isCloseTo = (value, target, tolerance) => {
          return Math.abs(value - target) <= tolerance;
        };
  
        // Condiciones para actualizar el stage con tolerancia
        let newStage = null;
        if (isCloseTo(normalizedRotation, 5.65, 0.2)) {
          newStage = 4;
        } else if (isCloseTo(normalizedRotation, 1.075, 0.2)) {
          newStage = 3;
        } else if (isCloseTo(normalizedRotation, 2.5, 0.2)) {
          newStage = 2;
        } else if (isCloseTo(normalizedRotation, 4.5, 0.2)) {
          newStage = 1;
        }
  
        // Actualiza el estado solo si ha cambiado
        if (newStage !== currentStage) {
          setCurrentStage(newStage);
        }
      }
    }
  });

  
  useEffect(() => {
    //console.log('currentStage ha cambiado:', currentStage);
  }, [currentStage]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.Clouds_Clouds_0.geometry}
        material={materials.Clouds}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.hammock_hammock_0.geometry}
        material={materials.hammock}
        position={[180.509, 1151.676, 5904.325]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry}
        material={materials.Tequila_Bottle}
        position={[3492.547, 1112.371, 3620.925]}
        rotation={[-1.38, 0.112, -0.022]}
      />
      <mesh
        geometry={nodes.skeleton_skeleton_0.geometry}
        material={materials.skeleton}
        position={[3541.67, 1110.094, 3568.021]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Pyramid_Pyramid_0.geometry}
        material={materials.Pyramid}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Island_Grass_Island_Grass_0.geometry}
        material={materials.Island_Grass}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.shrubbery_shrubbery_0.geometry}
        material={materials.shrubbery}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Lava_bubble_Lava_bubble_0.geometry}
        material={materials.Lava_bubble}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Volcanic_lava_Volcanic_lava_0.geometry}
        material={materials.Volcanic_lava}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry}
        material={materials.Palm_tree_2}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry}
        material={materials.Palm_tree_1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry}
        material={materials.Volacano_Sand}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Ocean_Ocean_0.geometry}
        material={materials.Ocean}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry}
        material={materials.Volcano_Grass}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Volcano_Base_Volcano_Base_0.geometry}
        material={materials.Volcano_Base}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
  );
};

export default Island;
