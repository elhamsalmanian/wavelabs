/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { useTheme } from 'next-themes'
import Logo from '../public/images/wavelabs-logo-1-min.png'
import { BsMoonFill, BsSun} from 'react-icons/bs'
import {useScroll} from './hooks/useScroll'

const Navbar = () => {

  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false);
   /* The primary use case for isMounted() is to avoid calling setState() after a component has unmounted, 
  because calling setState() after a component has unmounted will emit a warning. The “setState warning” exists to help you catch bugs,
  because calling setState() on an unmounted component is an indication that your app/component has somehow failed to clean up properly. 
  Specifically, calling setState() in an unmounted component means that your app is still holding a reference to the component after the component has been unmounted */

  const [isMenuOpen, setIsMenuOpen ] = useState(false)
  /* If you're using a menuIsOpen prop you can use to keep the menu open at all times */
  const { y, x, scrollDirection } = useScroll();  

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
      if (isMounted) {
          setTheme(theme === "light" ? "dark" : "light");
      }
  };

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }

  return (
    <header className=' w-full 
                      bg-white dark:bg-black
                        md:backdrop-filter 
                        md:backdrop-blur-sm 
                        bg-opacity-100
                        fixed 
                        flex 
                        justify-between 
                        items-center 
                        px-4 
                        h-20 
                        z-50
                        md:px-12 
                        
                        '
                        style={scrollDirection === "down" ? styles.active: styles.hidden} 
                    >
        <a href="#">
            <img src='images/wavelabs-logo-1-min.png'   
                 alt='Wavelabs Logo' 
                 className='h-10 m-0 md:h-12 '
            />
        </a>
        <nav >
            <button className=' md:hidden text-black dark:text-white' onClick={() => {setIsMenuOpen(!isMenuOpen)} }>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    className="h-8 w-8 cursor-pointer  "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"                    
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
       
        {/* <div className={` w-full md:flex md:items-center md:w-auto  transition duration-1000  select-none  ${isMenuOpen ? 'block ' : 'hidden'} `} > */}
            <ul
                className={`
                    fixed
                    left-0 right-0 
                    min-h-screen
                    sm:bg-white
                    sm:dark:bg-black
                    space-y-4
                    p-4
                    transform
                    translate-x-full
                    transition
                    duration-150
                    md:relative
                    md:flex
                    md:min-h-0
                    md:space-x-6 
                    md:space-y-0
                    md:p-0
                    md:translate-x-0
                    ${isMenuOpen ? "translate-x-0 " : "translate-x-full"} 

                `}
            >
                <li>
                    <Link href="/calendar">
                        <a className="md:p-3 py-2  text-blue-600 hover:text-blue-400 dark:text-[#f26c55]" href="#" >Features</a>
                    </Link>
                </li>
                <li>
                    <Link href="/calendar">
                        <a className="md:p-3 py-2 text-blue-600 hover:text-blue-400 dark:text-[#f26c55]" href="#" >Pricing</a>
                    </Link>
                </li>
                <li>
                    <Link href="/calendar">
                        <a className="md:p-3 py-2 text-blue-600 hover:text-blue-400 dark:text-[#f26c55]" href="#" >Customers</a>
                    </Link>
                </li>
                <li>
                    <Link href="/calendar">
                        <a className="md:p-3 py-2 text-blue-600 hover:text-blue-400 dark:text-[#f26c55]" href="#" >Blog</a >
                    </Link>
                </li>
                <li>
                    <Link href="/calendar">
                        <a className="md:p-4 py-3 text-blue-600 hover:text-blue-400 dark:text-[#f26c55]" href="#">Sign Up</a>
                    </Link>
                </li>
                <li>
                <button className=" rounded-full align-middle text-gray-500  dark:text-gray-200" onClick={switchTheme} >
                    { theme === "dark" ? <BsSun/> :  <BsMoonFill/>  }                                                    
                </button>
                </li>
            </ul>
      
        </nav>
    </header>
  )
}

export default Navbar