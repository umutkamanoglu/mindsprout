import React from 'react'
import Logo from '../Logo'

function Header() {
    return (
        <header
            className='bg-white h-20 border border-x-0 border-t-0 border-gray-200 flex items-center justify-between p-[2vw] sticky top-0 z-50'
        >
            <Logo />
        </header>
    )
}

export default Header