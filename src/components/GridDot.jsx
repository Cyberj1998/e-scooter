import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Burger1 from '../assets/Burgers/burger_products/burger_product_3.png'


import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from './config'


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

function Home() {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * 100));
    }, 300); // Decreased interval time to 300 milliseconds

    return () => clearInterval(interval);
  }, []);

  /*
  #9fffcb
  #25a18e
  #7ae582
  
  #00a5cf
  */ 
  return (
    <div className='obsolute-container h-[100vh] w-full flex items-center relative'>
      <div className='ml-[50px] mt-[-20px] h-fit absolute z-10'>
        <motion.div {...headContainerAnimation}>
          <h1 className='xl:text-[10rem] md:text-[6rem] text-[4rem] xl:leading-[11rem] leading-[7rem] font-black bg-gradient-to-r from-[#9fffcb] via-[#25a18e] to-[#7ae582] bg-clip-text text-transparent font-sans'>Prime <br />Burgers</h1>
        </motion.div>
        <motion.div {...headTextAnimation}>
          <p className='text-[15px] text-[#3d3d3d] md:w-[50%] w-[80%] mt-[5px]'>¡Bienvenido a Prime Burgers! Disfruta de las mejores hamburguesas de la ciudad,🍔 jugosas y repletas de sabor. Desde clásicas hasta creaciones innovadoras,</p>
        </motion.div>
        <motion.div {...headContentAnimation}>
          <button className='text-black bg-[#7ae582] p-[10px] rounded-[20px] cursor-pointer font-sans font-semibold'><Link to='/shop'>Pide la tuya!</Link></button>
        </motion.div>
      </div>
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: -35 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className='hero-image md:ml-[45%] ml-[20%] z-[2] h-[300px]'
        src={Burger1}
        alt='Burger image'
      />
      <div className='absolute w-full h-full grid grid-cols-10 gap-0' style={{ zIndex: 1 }}>
        {[...Array(100).keys()].map((index) => (
          <motion.div
            key={index}
            animate={index === activeIndex ? 'animate' : 'initial'}
            variants={dotVariants}
            className='bg-[#919191] w-[2.5px] h-[2.5px] rounded-full'
          />
        ))}
      </div>

    </div>
  )
}


export default Home