import React from 'react'

import web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import web3Mobile from "../assets/images/image-web-3-mobile.jpg";

const Trending = () => {
  return (
    
    <div className='grid lg:grid-auto-rows-min xl:gap-8 lg:gap-8 xs:gap-5 lg:pt-10 xs:pt-5 '>

        <div>
            <img src={web3Desktop} className=' md:block xs:hidden'/>
            <img src={web3Mobile} className='md:hidden xs:block' />
        </div>
        
        <div className='grid lg:grid-cols-2 xl:gap-8 lg:gap-8 xs:gap-0 '>
            <h1 className='font-inter text-left text-veryDarkGray font-[800] xl:text-[52px] xl:leading-none lg:text-[42px] xs:text-4xl lg:p-0 xs:pb-4'> The Bright Future of Web 3.0?</h1>
            <div>
                <p className='font-inter text-darkGrayBlue font-[400] xl:text-[15px] lg:text-[12px] xs:text-[15px] xl:pb-8 lg:pb-10 xs:pb-5'> 
                    We dive into the next evolution of the web that
                    <br />claims to put the power of the platforms back
                    <br />into the hands of the people. But is it really
                    <br />fulfilling its promise?
                </p>
                <button className='bg-softRed hover:bg-veryDarkBlue text-offWhite font-inter uppercase px-8 py-3 text-[15px] tracking-[.25em] font-[700]'>Read More</button>
            </div>
     
        </div>

    </div>

  
  )
}

export default Trending