import React from 'react'
import Carousel from "framer-motion-carousel";

export const newLink = [
    {
        title:"Hydrogen VS Electric Cars",
        text:"Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
        title: "The Downsides of AI Artistry",
        text:"What are the possible adverse effects of on-demand AI image generation?",
    },
    {
        title: "Is VC Funding Drying Up?",
        text:"Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
];

const New = () => {
  return (
    <div className='bg-veryDarkBlue px-5 pb-[10.5px]'>
        <h1 className='font-inter font-[800] text-4xl text-softOrange text-justify pt-6 pb-6'>New</h1>

        

        
        
        <div className='xl:block '>

            <div className='grid grid-rows-3 xl:gap-8 lg:gap-6 xs:gap-8'>
                {newLink.map((news,index) => (
                    <div key={index} className='border-b-[.5px] last:border-b-0 border-grayBlue '>
                        

                        <h3 className='font-inter font-[800] xl:text-xl lg:text-base xs:text-xl text-offWhite hover:text-softOrange '>{news.title}</h3>
                        <p className='font-inter text-grayBlue xl:text-[15px] lg:text-[12px] xs:text-[15px] pt-2 xl:pb-8 lg:pb-6 xs:pb-8'>{news.text}</p>
                        
                    </div>
                ))}
        
            </div>
        </div>



         
          {/*
            <div className='xl:hidden lg:block xs:hidden h-[290px] w-[240px]'>
            <Carousel interval={3000} renderArrowLeft={() => null} renderArrowRight={() => null} renderDots={()=>null}>
            {newLink.map((news,index) => (
            <div key={index} className=''>
                
                <div className=''>
                <h3 className='font-inter font-[800] text-xl text-offWhite hover:text-softOrange '>{news.title}</h3>
                <p className='font-inter text-grayBlue text-[15px] pt-2 pb-8'>{news.text}</p>
                
                </div>

            </div>
        ))}
            </Carousel>
        </div>
            */}

        

    </div>
  )
}

export default New