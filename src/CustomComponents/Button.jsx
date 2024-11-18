import React from 'react'
import clsx from 'clsx'
import Marker from '../CustomComponents/Marker'


const Button = ({ icon, children, href, containerClassName, markerFill, onClick }) => {

  const Inner = () => (
    <>
      <span className='relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
        <span className='absolute -left-[1px] '>
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img src={icon} alt="icon" className='size-10 mr-5 object-contain z-10' />
        )}

        <span className='relative z-2 font-poppins base-bold bg-gradient-to-r from-c3/75 via-c3 to-c2 bg-clip-text text-transparent uppercase '>
          {children}
        </span>
      </span>

      <span className='glow-before glow-after' />
    </>
  )

  return href ? (
    <a 
      className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button 
      onClick={onClick}
      className={clsx('relative p-0.5 g5 rounded-2xl shadow-500 group', containerClassName)}
    >
      <Inner />
    </button>
  )
}

export default Button
