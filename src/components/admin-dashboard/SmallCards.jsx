import React from 'react'
import SmallCard from './SmallCard'
import infos from './infos'

export default function SmallCards() {
  return (
    <div className='grid px-3 lg:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 py-8'>
      {infos.map((item, id) => {
          return <SmallCard key={id}
              icon={item.icon}
              text={item.text}
              num={item.num} />
      })}
    </div>
  )
}
