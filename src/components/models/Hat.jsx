"use client";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/hat-transformed.glb');
  const ref = useRef();
  
  useFrame(() => {
    ref.current.rotation.y += 0.007;
  });

  return (
    <group
      {...props} 
      position={[0, 0.3, 0]}
      scale={[1.4, 1.4, 1.4]}
      rotation={[0.4, -1, 0]}
      dispose={null}
      ref={ref}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        position={[0, -3.867, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/hat-transformed.glb');