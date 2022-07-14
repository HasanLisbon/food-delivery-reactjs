import React from 'react'
import Logo from '../assets/img/logo.png'

const Header = ()=>{
    return (
    <header className='w-screen fixed z-50 p-6 px-16'>
        {/* desktop and tablet */ }
        <div className='hidden md:flex w-full h-full '>
            <div className='flex items-center gap-2'>
                <img src={Logo} alt="log" className='w-8 object-cover' />
                <p className='text-headingColor text-xl font-bold'> City</p>
            </div>
            <ul className='flex items-center gap-8 ml-auto'>
                <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                <li className='text-base text-headingColor hover:text-textColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
            </ul>
        </div>

  
        {/* mobile */}
        <div className='flex md:hidden w-full h-full'></div>
    </header>
    )
}

export default Header;
