import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";

import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconMenuClose from "../assets/images/icon-menu-close.svg";


export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "new",
        title: "New",
    },
    {
        id: "popular",
        title: "Popular",
    },
    {
        id: "trending",
        title: "Trending",
    },
    {
        id: "categories",
        title: "Categories",
    },
];

const Navbar = () => {
    
    const [navOpen, setNavOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className='w-full flex flex-wrap items-center justify-between mx-auto'>
        <img src={logo}/>
        {/* Desktop Nav */}
        <ul className='list-none lg:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav,index) => (
                <li
                key={nav.id}
                className='font-inter text-[15px] p-5 last:pr-0 text-darkGrayBlue  hover:text-softOrange'
                >
                
                <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className={`${!navOpen ? "lg:hidden flex flex-1 justify-end items-center" : "hidden"}`}>
            <img 
            src={iconMenu}
            alt='menu'
            className='object-contain cursor-pointer'
            onClick={() => setNavOpen((prev)=> !prev)}
            />
        </div>

        {/* Mobile Nav */}
        
        <div className={`"md:hidden block flex-col items-center fixed h-full bg-white z-10 transform top-0 right-0 ease-in-out transition-all duration-1000" ${navOpen ? " translate-x-0": "   translate-x-full"}`}>
        
            <img src={iconMenuClose} onClick={() => setNavOpen(false)} className='cursor-pointer absolute top-5 right-5'/>
                <ul className='pt-20 pr-20 pl-5'>   
                    {navLinks.map((nav,index) => (
                        <li
                        key={nav.id}
                        className='font-inter text-[15px] text-veryDarkGrayBlue pt-4 hover:text-softOrange'
                        >
                        
                        <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
        </div>
  



    </div>
  )
}

export default Navbar