import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('../../../public/desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        groundColor="black"/>
        <pintLight intensity={1} />
        <primitive
          object={computer.scene}
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      framelop="demand"
      shadows
      camera=
    >

    </Canvas>
  )
}

export default Computers