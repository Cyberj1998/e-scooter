import React from 'react'
import Logo from '../assets/images/xora.svg'
import { Link as LinkScroll } from 'react-scroll'
import Magic from '../assets/images/magic.svg'
import Close from '../assets/images/close.svg'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import BackgroundLines from '../assets/images/bg-outlines.svg'
import BackgroundLinesFilled from '../assets/images/bg-outlines-fill.png'





const Header = () => {

  const[hasScroll,setHasScroll]=useState(false)
  const[isOpen,setIsOpen]=useState(false)

  const NavLink = ({ title }) => (
    <LinkScroll
    to={title}
      className={clsx('base-bold bg-gradient-to-r from-[#133E87] to-[#b3a4c4] bg-clip-text text-transparent uppercase transition-colors duration-500 cursor-pointer hover:text-c4 max-lg:my-4 max-lg:h-5', hasScroll && 'base-bold text-white uppercase transition-colors duration-500 cursor-pointer hover:text-c4 max-lg:my-4 max-lg:h-5' )}
    >
      {title}
    </LinkScroll>
  )


  useEffect(()=>{
    const handleScroll = () => {
      setHasScroll(window.scrollY > 32 )
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])
  
  return (
    <header className={clsx('fixed top-0 left-0 w-full py-10 transition-all z-[500] duration-1000 max-lg:py-4', hasScroll && 'py-2 z-[500] backdrop-blur-[8px]')}>
      <div className='container flex h-14 items-center max-lg:px-5'>
        <a className='lg:hidden flex-1 cursor-pointer z-2'>
          <img src={Logo} alt="Logo" width={115} height={55} />
        </a>
 
          <div className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-c2 max-lg:opacity-0', isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none')}>
            <div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
              <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                <ul className='flex max-lg:block max-lg:px-12'>
                  <li className='nav-li'>
                    <NavLink title='Features' />
                    <div className='h-2 w-2 bg-c3/55 rounded-full max-sm:hidden' />
                    <NavLink title='Plans' />
                  </li>

                  <li className='nav-logo'>
                    <LinkScroll
                      to='hero'
                      offset={-100}
                      spy
                      smooth
                      className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}
                    >
                      <img src={Logo} alt="logo" width={160} height={55} />
                    </LinkScroll>
                  </li>

                  <li className='nav-li'>
                    <NavLink title='faq' />
                    <div className='h-2 w-2 bg-c3/55 rounded-full max-sm:hidden' />
                    <NavLink title='testimonials' />
                  </li>
                </ul>
              </nav>


              <div className='lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90'>
                <img src={BackgroundLines} alt="background lines" width={960} height={380} className='relative z-2 ' />
                <img src={BackgroundLinesFilled} alt="background lines" width={960} height={380} className='absolute inset-0 mix-blend-soft-light opacity-5' />
              </div>
            </div>
          </div>


          <button className='lg:hidden z-2 size-10 border-2 border-c3/25 rounded-full flex justify-center items-center' onClick={()=>setIsOpen((prevState) => ! prevState)}>
            <img src={isOpen ? Close : Magic} alt="burger menu" className='size-1/2 object-contain' />
          </button>
      </div>
    </header>
  )
}



export default Header
