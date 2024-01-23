import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import Loader from '../components/Loader'
import Island from '../models/island';
import Sky  from '../models/Sky';
import Bird from '../models/Bird';
import Plane  from '../models/Plane';
import { soundoff, soundon } from "../assets/icons";
import HomeInfo from '../components/HomeInfo.JSX';
import SecondBird from '../models/SecondBird';
import AgoraHills from "../assets/AgoraHills.mp3"

      
const Home = () => {
  const audioRef = useRef(new Audio(AgoraHills));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const[isRotating,setisRotating]= useState(false);
  const[curretstage,setCurrentStage]= useState(false);
  const[isPlaying,setisPlaying]= useState(true);
  useEffect(()=>{
    if (isPlaying) {
      audioRef.current.play();
    }
    return()=>{
      audioRef.current.pause();
    }
  },[isPlaying]);
  const adjustIslandForScreensize = ()=>{
    let screenScale = null;
    let screenPosition = [0,-6.5,-43];
    let rotation = [0.1,4.7,0];
    if(window.innerWidth <768){
      screenScale = [0.9,0.9,0.9];
    }
    else{
      screenScale = [1,1,1];
    }
    return [screenScale, screenPosition,rotation];
  };

  const adjustPlaneforScreensize = ()=>{
    let screenScale,screenPosition ;
    if(window.innerWidth <768){
      screenScale = [1.5,1.5,1.5];
      screenPosition = [0,-1.5,0];
    }
    else{
      screenScale = [3,3,3];
      screenPosition = [0,-4,-4];
    }
    return [screenScale, screenPosition];
  };

  const[islandScale,islandPostion,islandrotation] = adjustIslandForScreensize();
  const[planeScale,planePostion] = adjustPlaneforScreensize();
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {curretstage && <HomeInfo curretstage = {curretstage}/>}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
      camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader />}>
          <directionalLight  position={ [1,10,1]} intensity={2}/>
          <ambientLight intensity={0.5} />
          <hemisphereLight  skyColor = '#b1e1ff' groundColor="#000000" intensity={1}/>
          <Bird/>
          <SecondBird />
          <Sky 
          isRotating={isRotating}
          />
          <Island position = {islandPostion}
          scale = {islandScale}
          rotation = {islandrotation}
          isRotating={isRotating}
          setisRotating= {setisRotating}
          setCurrentStage = {setCurrentStage} />
          <Plane 
          isRotating={isRotating}
          scale= {planeScale}
          position = {planePostion}
          rotation={[0,20,0]}/>
       </Suspense>

      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={!isPlaying ? soundoff:soundon} alt="Music Button" className='w-10 h-10 cursor-pointor object-contain'
        onClick={()=> setisPlaying(!isPlaying)} />
    </div>
    </section>
    
  )
} 

export default Home
