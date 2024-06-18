import React from 'react'
import ContactContent from './ContactContent'

const Header = () => {
    return (
        <header className="w-full h-[600px] mb-[20px] bus py-8 px-12 relative">
            <div className="absolute top-[30%] w-[90%] h-auto left-[50%] -translate-x-[50%] -translate-y-[-0%]">
                <ContactContent />
            </div>
        </header>
    )
}

export default Header
