"use client";

import React, { useRef } from 'react';
//threejs
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
//hooks
import { useScreenSize } from '@/hooks';

export default function ComputerModel(props) {
  const { nodes, materials } = useGLTF('/models/computer-transformed.glb');
  const { isMediumScreen, isSmallScreen } = useScreenSize();

  const renderScale = () => {
    if (isSmallScreen) {
      return [0.65, 0.65, 0.65];
    }

    if (isMediumScreen) {
      return [0.9, 0.9, 0.9];
    }

    return [1, 1, 1];
  }

  const renderYPosition = () => {
    if (isSmallScreen) {
      return -0.6;
    }

    if (isMediumScreen) {
      return -0.75;
    }

    return -0.75;
  }

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y = renderYPosition() + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group 
      {...props} 
      ref={modelRef}
      dispose={null}
      position={[0, renderYPosition(), 0]}
      scale={renderScale()}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_Computer_midtech_0.geometry}
        material={materials.Computer_midtech}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );

  return (
    <group 
      {...props} 
      ref={modelRef}
      dispose={null}
      position={[0, renderYPosition(), 0]}
      scale={renderScale()}
      rotation={[0.25, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Evil_Hathattty_mesh_Evil_HatBLN_Hat_0.geometry}
        material={materials.Evil_HatBLN_Hat}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WandpCylinder1_Wandq_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_shoe_tongue_mesh_BLN_Shoe_tongue_0.geometry}
        material={materials.BLN_Shoe_tongue}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chest_piece_mesh_BLN_chest_piece_0.geometry}
        material={materials.BLN_chest_piece}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Right_Eyeball_Mesh_Lam_eyeball_0.geometry}
        material={materials.material_0}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pants_mesh_BLN_Pants_0.geometry}
        material={materials.BLN_Pants}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lower_coat_mesh_FK_BLN_Lower_coat_0.geometry}
        material={materials.BLN_Lower_coat}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.R_shoe_mesh_BLN_shoes_0.geometry}
        material={materials.BLN_shoes}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Upper_coat_mesh_BLN_upper_coat_0.geometry}
        material={materials.BLN_upper_coat}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper_body_mesh_BLN_shirt_0.geometry}
        material={materials.BLN_shirt}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper_body_mesh_BLN_Shirt_collar_0.geometry}
        material={materials.BLN_Shirt_collar}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Coat_collar_mesh_BLN_collar_piece_0.geometry}
        material={materials.BLN_collar_piece}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpolySurface5_Bookblinn1_0.geometry}
        material={materials.Bookblinn1}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookBook_corner_mesh4_Booklam_book_corners_0.geometry}
        material={materials.Booklam_book_corners}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpolySurface20_BookBLN_Metal_parts_0.geometry}
        material={materials.BookBLN_Metal_parts}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookFront_glow_mesh_Booklambert8_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpolySurface2_BookBLN_Book_covers_0.geometry}
        material={materials.BookBLN_Book_covers}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpCube10_Booklam_front_bits_0.geometry}
        material={materials.material_2}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BookpolySurface28_Booklam_back_bits_0.geometry}
        material={materials.Booklam_back_bits}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Evil_HatpPlane1_Evil_HatsolidShader_0.geometry}
        material={materials.PaletteMaterial003}
        position={[-1.057, 0, 0]}
        rotation={[0, 0.224, 0]}
        scale={0.832}
      />
    </group>
  );
}

useGLTF.preload('/models/computer-transformed.glb');