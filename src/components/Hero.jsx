import React from 'react'
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom'
import Button from '../CustomComponents/Button'
import { Loader } from '@react-three/drei'
import Zap from '../assets/images/zap.svg'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useState, useEffect } from 'react'
import ScooterModel from './ScooterModel'
import CustomLoader from './CustomLoader'


import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from '../constants/motionAnimations'

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

const Hero = () => {

  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * 100));
    }, 300); // Decreased interval time to 300 milliseconds

    return () => clearInterval(interval);
  }, []);


  const adjustScreen = () => {
    let screenScale = null;
    let screenPosition = [5, -15, -30];
    let rotation = [0, 0.5, 0];
    
    if(window.innerWidth < 768){
      screenScale = [20, 20, 20]
    }
    else{
      screenScale = [20, 20, 20]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [ModelScale, ModelPosition, Modelrotation] = adjustScreen()

  return (
    <section className='relative pt-[120px] pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 '>
      <Element name='hero' className='flex max-sm:flex-col'>
        <div className='overflow-visible'>
          <div className='relative z-2 max-w-512 ml-[20px] max-lg:max-w-388'>
            <motion.div className='small-2 uppercase text-[#1bbb4b] text-left' {...headContainerAnimation}>
              E-bikes for everyone
            </motion.div>
            <motion.div {...headTextAnimation}>
              <h1 className='mb-6 h1 bg-gradient-to-r from-c2 via-c3 to-c3/75 bg-clip-text text-transparent uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 text-left'>
                Future Movement
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation}>
              <p className='max-w-440 mb-14 body-1 max-md:mb-10 text-c2/45 text-left'>
              Embrace the future of urban movement and go with it, with the new generation of electric scooters designed for the times we are living in.
              </p>
            </motion.div>
              <Link className='w-ful flex' to='/config'>
                <Button 
                  icon={Zap} 
                >
                  Start right now
                </Button>
              </Link>
          </div>
        </div>
            
            { /*-----------Canvas 3d model-------*/ }

            <div className='w-full z-[500] max-sm:h-[500px] max-sm:-z-2'>

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
              <Canvas 
              camera={{ near: 1, far: 500 }}
              >
                <Suspense fallback={<CustomLoader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                  <ScooterModel
                    position={ModelPosition}
                    scale={ModelScale}
                    rotation={Modelrotation}
                  />
                </Suspense>
              </Canvas>
              <Loader />
            </div>
      </Element>
    </section>
  )
}




export default Hero
