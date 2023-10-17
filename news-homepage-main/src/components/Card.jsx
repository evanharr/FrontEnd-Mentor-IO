import React from 'react'

const Card = ({id,title,text,img}) => {
  return (
    <div className='grid grid-cols-[1fr_2fr] xl:gap-6 lg:gap-4 xs:gap-6'>

        
        <img src={img} className='w-full h-full object-contain'/>
        

        <div className='grid grid-auto-rows'>
            <h1 className='font-inter font-[800] xl:text-3xl lg:text-xl xs:text-3xl text-grayBlue'>{id}</h1>
            <h3 className='font-inter font-[800] xl:text-lg lg:text-sm xs:text-lg text-veryDarkBlue hover:text-softRed'>{title}</h3>
            <p className='font-inter font-[400] text-darkGrayBlue xl:text-[15px] lg:text-[12px] xs:text-[15px]'>{text}</p>
        </div>

    </div>
  )
}

export default Card