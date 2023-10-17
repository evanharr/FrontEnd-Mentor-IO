import { useState } from 'react'

import Navbar from './components/Navbar';

import New from './sections/New';
import Popular from './sections/Popular';
import Trending from './sections/Trending';

function App() {
 

  return (
    <div className='lg:pt-20 xl:px-40 lg:px-20 xs:p-5'>
      <Navbar />
      <div className='grid lg:grid-rows-[70%_30%] lg:gap-16 xs:grid-rows-2 xs:gap-12'>

          <div className='grid xl:grid-cols-[2.1fr_1fr] lg:grid-cols-[2.1fr_1fr] xl:gap-8 lg:gap-6 lg:pb-2 '>
            <div className='lg:row-span-2'>
                <Trending />
            </div>
            <div className='lg:pt-10 xs:pt-12'>
                <New />
            </div>
          </div>
         
          <div>
            <Popular />
          </div>
      </div>


    </div>
  )
}

export default App
