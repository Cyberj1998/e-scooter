import React from 'react'
import Logo from '../assets/images/xora.svg'
import { Link as LinkScroll } from 'react-scroll'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'





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
                  <li className='nav-logo'>
                    <Link 
                      to='/'
                      offset={-100}
                      spy
                      smooth
                      className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}
                    >
                      <img src={Logo} alt="logo" width={160} height={55} />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </div>
    </header>
  )
}



export default Header
