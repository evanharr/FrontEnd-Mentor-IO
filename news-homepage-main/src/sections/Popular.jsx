import React from 'react'

import gamingGrowth from "../assets/images/image-gaming-growth.jpg";
import retro from "../assets/images/image-retro-pcs.jpg";
import laptops from "../assets/images/image-top-laptops.jpg";

import Card from "../components/Card";

const popularCards = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    img: retro,
  },
  {
    id: "02",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
    img: laptops,
  },
  {
    id: "03",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
    img: gamingGrowth,
  },
]
const Popular = () => {
  return (
    <div className='w-full'>

      <div className='grid lg:grid-cols-3 xs:grid-auto-rows gap-8 '>
        {popularCards.map((card,index) => (
          
          <Card key={card.id} id={card.id} title={card.title} text={card.text} img={card.img} />

          
        ))}
      </div>

    </div>
  )
}

export default Popular