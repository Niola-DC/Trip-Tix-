import React from 'react'
import Navlinks from '../../home/header/sub-component/Navlinks'
import FaqContent from './FaqContent'

const FaqHeader = () => {
  return (
      <header className="w-full h-[400px] mb-[20px] bus py-8 px-12 relative">
          <Navlinks />
          <div className="absolute top-[35%] w-[90%] h-auto left-[50%] -translate-x-[50%] -translate-y-[-0%]">
            <FaqContent/>
          </div>
      </header>
  )
}

export default FaqHeader
