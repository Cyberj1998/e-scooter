import React from 'react'
import Button from '../CustomComponents/Button'
import Zap from '../assets/images/zap.svg'
import { useState, useEffect } from 'react'
import StaticScooter from './StaticScooter'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { parts } from '../constants/PartsExports.jsx'
import { partsfeatures } from '../constants/PartsExports.jsx'
import CustomLoader from './CustomLoader.jsx'

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from '../constants/motionAnimations'


const Configurator = () => {

  const[partType,setPartType]=useState('')
  const[arrayNumber,setArrayNumber]=useState(0)


  const handleClick = (part) => {
    setPartType(part.status)
    setArrayNumber(part.position)
  }
  

  const dotVariants = {
    initial: { y: 0 },
    animate: { 
      y: -10,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
  }

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * 100));
    }, 300); // Decreased interval time to 300 milliseconds

    return () => clearInterval(interval);
  }, []);


  const[preview,setPreview]=useState(false)

  const handlePreview = () => {
    setPreview(true)
  }

  const adjustScreen = () => {
    let screenScale = null;
    let screenPosition = [5, -10, -30];
    let rotation = [0, 0.5, 0];
    
    if(window.innerWidth < 768){
      screenScale = [10, 10, 10]
    }
    else{
      screenScale = [15, 15, 15]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [ModelScale, ModelPosition, Modelrotation] = adjustScreen()

  return (
    <div className='overflow-hidden max-sm:h-[200vh] max-md:h-[200vh] h-[100vh] w-full flex flex-col md:flex-row justify-center items-center'>
      <div className={`${preview ? 
        'w-full md:h-[100vh] h-[100%] transition-all duration-500 overflow-hidden flex justify-around items-center flex-col bg-gradient-to-b from-c2 to-[#09353f]' 
        : 
        'md:h-[100vh] h-[50%] md:w-[40%] w-[100%] overflow-hidden flex justify-between items-center flex-col bg-gradient-to-b from-c2 to-[#09253f]'}`}>
       <h1 className='mb-6 h1 bg-gradient-to-r text-[100px] from-c2 to-c3 opacity-20 bg-clip-text text-transparent uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 relative md:mt-[200px] mt-[50px]'>E-Bike</h1>
        <div className='w-full h-fit flex justify-center items-center'>
          {
            !preview ? (
              <Button
                onClick={()=>handlePreview()}
                icon={Zap} 
              >
                Preview
              </Button>
            ) 
            : (
              ''
            )
          }
          
        </div>
        <div className='model_container absolute h-full w-full'>
          <Canvas 
            camera={{ near: 1, far: 500 }}
            >
            <Suspense fallback={<CustomLoader />}>
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                <StaticScooter
                  position={ModelPosition}
                  scale={ModelScale}
                  rotation={Modelrotation}
                />
            </Suspense>
          </Canvas>
          <Loader />
        </div>
      </div>
        {
          !preview ? (

          <div className='h-[70%] object-contain md:w-[60%] w-[100%] flex justify-around items-center flex-col'>


              <div className='absolute left-[50%] w-[350px] h-[350px] grid grid-cols-10 gap-0 z-2' style={{ zIndex: 1 }}>
                {[...Array(100).keys()].map((index) => (
                  <motion.div
                    key={index}
                    animate={index === activeIndex ? 'animate' : 'initial'}
                    variants={dotVariants}
                    className='bg-[#8c8c8c] w-[2.5px] h-[2.5px] rounded-full'
                  />
                ))}
              </div>

          <div className='bg-[#bacbcd] z-2 max-sm:justify-center max-md:justify-center max-md:h-[400px] max-sm:h-[400px] rounded-[10px] p-10 flex flex-col justify-around h-[500px]'>

            <h1 className='w-[20rem] uppercase text-[#656565] font-poppins font-semibold text-2xl'>
              <span className='bg-gradient-to-r from-c2 via-c3 to-c3/75 bg-clip-text text-transparent'>The Best</span> Out There
            </h1>
              <div className='border border-black h-[50px] w-[20rem] rounded-[10px] flex flex-row justify-center items-center'>
                {
                parts.map((part)=>(
                  <div key={part.id} className='h-full w-[5rem] rounded-[10px] flex justify-center items-center'>
                    <img src={part.image} alt="pieces" className='object-contain h-full w-10 cursor-pointer' onClick={()=>handleClick(part)} />
                  </div>
                ))}
              </div>
              <p className='text-c3 font-sans font-semibold text-[20px] text-left w-[20rem]'>
                Here is why
              </p>

              <p className='text-[#656565] font-semibold font-sans'>
                {partType}
              </p>

              <div className='border border-black  w-[20rem] rounded-[10px] flex flex-col justify-center items-center'>
                <motion.div {...headContainerAnimation}>
                  <h1 className='bg-gradient-to-r font-sans font-semibold text-[20px] from-c2 via-c3 to-c3/75 bg-clip-text text-transparent'>
                    {partsfeatures[arrayNumber].title}
                  </h1>
                </motion.div>
                <motion.div {...headContentAnimation}>
                  <p className='font-sans font-semibold text-[#656565] text-[15px] p-5'>
                    {partsfeatures[arrayNumber].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          )
          : (
            ''
          )
        }
      
    </div>
  )
}

export default Configurator
