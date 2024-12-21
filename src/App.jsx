import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";
import Cyl from "./cyl";
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const App = () => {


  return (
    <>
    <Canvas camera={{fov:35}}>
      <OrbitControls/>
    <ambientLight />
    <Cyl/>
    <EffectComposer>
      <Bloom
      mipmapBlur
      intensity={12.0}
      luminanceSmoothing={0}
      luminanceThreshold={0}
      />
      <ToneMapping adaptive/>
    </EffectComposer>
  </Canvas>
    </>
  )

}

export default App