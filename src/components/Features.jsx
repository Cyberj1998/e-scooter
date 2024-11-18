import React from 'react'
import { Element } from 'react-scroll'
import { features, details } from '../constants'
import Button from '../CustomComponents/Button'


const Features = () => {
  return (
    <section>
      <Element name='Features'>
        <div className='container'>
          <div className='relative flex md:flex-wrap flex-nowrap shadow-[inset_0px_5px_15px_-3px_rgba(0,_0,_0,_0.2)] rounded-7xl md:overflow-hidden max-md:flex-col feature-after max-md:borde-none max-md:rounded-none max-md:gap-3'>
            {features.map((feature)=>(
              <div
                className='relative shadow-[inset_0px_5px_15px_-3px_rgba(0,_0,_0,_0.2)] z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:rounded-3xl max-md:flex-320 ' 
                key={feature.id}
              >
                <div className='w-full flex justify-start items-start'>
                  <div className='-ml-3 mb-12 flex items-center justify-center flex-col'>
                    <div className='w-0.5 h-16 bg-c3' />
                    <img src={feature.icon} alt="feature icon" className='size-28 object-contain' />
                  </div>
                </div>

                <p className='text-[#1bbb4b] uppercase font-sans font-semibold text-[20px] mb-5 max-md:mb-6'>
                  {feature.caption}
                </p>
                <h2 className='max-w-400 mb-7 h3 bg-gradient-to-r from-c2 via-c3 to-c3/75 bg-clip-text text-transparent uppercase max-md:mb-6 max-md:h5'>
                  {feature.title}
                </h2>

                <p className='mb-11 body-1 text-x2 max-md:mb-8 max-md:body-3'>
                  {feature.text}
                </p>

                <Button
                  icon={feature.button.icon}
                >
                  {feature.button.title}
                </Button>
              </div>
            ))}

            <ul className='relative w-full flex justify-around flex-row px-[5%] border-2 border-c3 rounded-7xl max-md:hidden'>
              <div className='absolute bg-c3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10' />

              {details.map(({ id, title, icon })=>(
                <li key={id} className='relative pt-16 px-4 pb-14'>
                  <div className='absolute top-0 bottom-0 left-1/2 bg-transparent w-[1px] h-full z-10' />

                  <div className='flex items-center justify-center mx-auto mb-3 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20'>
                    <img src={icon} alt={icon} className='size-17/20' />
                  </div>
                  <h3 className='relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase text-x1'>
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Features
