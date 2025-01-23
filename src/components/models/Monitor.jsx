"use client";

import React, { useRef } from 'react';
//threejs
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
//hooks
import { useScreenSize } from '@/hooks';

export default function ComputerModel(props) {
  const { nodes, materials } = useGLTF('/models/monitor-transformed.glb');
  const { isMediumScreen, isSmallScreen } = useScreenSize();

  const renderScale = () => {
    if (isSmallScreen) {
      return [0.48, 0.48, 0.48];
    }

    if (isMediumScreen) {
      return [0.8, 0.8, 0.8];
    }

    return [1, 1, 1];
  }

  const renderPostion = () => {
    if (isSmallScreen) {
      return [0, -0.5, 0];
    }

    return [0, -1, 0];
  }

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.003;
  });

  return (
    <group 
      {...props} 
      ref={modelRef}
      dispose={null}
      position={renderPostion()}
      rotation={[-0.1, 0, 0]}
      scale={renderScale()}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor002_low_monitor_0.geometry}
        material={materials.monitor}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/monitor-transformed.glb');