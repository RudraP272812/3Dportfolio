import React from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei';
const Bird = () => {
    const bird = useGLTF(birdScene);
  return (
    <mesh>
      
    </mesh>
  )
}

export default Bird