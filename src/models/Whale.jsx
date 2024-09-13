/*
Author: rkuhlf (https://sketchfab.com/rkuhlf)
Title: Whale
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import scene from '../assets/3d/whale.glb';



const Whale = ({currentAnimation, ...props}) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(scene)
  const { actions } = useAnimations(animations, group)
  
  useEffect(() =>{

  }, [actions, currentAnimation])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.162, 0.217, 0.075]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_17" position={[-0.029, 0.064, -0.121]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Whale}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Whale_16" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Whale;