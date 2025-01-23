"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
//style
import clsx from 'clsx';

const RenderModel = ({ children, className }) => {
  return (
    <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <Environment preset='apartment' />
    </Canvas>
  );
}

export default RenderModel;