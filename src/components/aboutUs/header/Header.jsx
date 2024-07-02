import React from 'react'
import Navlinks from '../../home/header/sub-component/Navlinks'
import Content from './Content';

const Header = ({ handleToggleModal }) => {
  return (
    <header className="w-full aboutus-header h-[120dvh] lg:h-[100dvh] bus py-8 px-12 relative">
      <Navlinks handleToggleModal={handleToggleModal} />
      <div className="absolute content top-[30%] w-[90%] h-auto left-[50%] -translate-x-[50%] -translate-y-[-0%]">
        <Content />
      </div>
    </header>
  );
}

export default Header
