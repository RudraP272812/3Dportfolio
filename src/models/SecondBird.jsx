import React,{ useEffect, useRef } from 'react'
import birdScene from '../assets/3d/dove.glb'
import { Html, useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const secondBird = () => {
  const birdRef = useRef();
  const {scene,animations} = useGLTF(birdScene);
  const{actions} = useAnimations(animations,birdRef);
  //this is used to run effect
  useEffect(()=>{
    //always use Capital T 
    const action = actions['Take 001'].play();
    action.setEffectiveTimeScale(10);
  }, [actions])
  useFrame(({ clock, camera }) => {
  
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 3 + 1;

   
    if (birdRef.current.position.x > camera.position.x + 30) {
      
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 30) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.02;
      birdRef.current.position.z -= 0.02;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.02;
      birdRef.current.position.z += 0.02;
    }
  });
  return (
    <mesh position={[0, 0, 0]} scale={[0.007, 0.007, 0.007]} ref={birdRef}>
        <primitive object={scene} />
      </mesh>
  )
}

export default secondBird
