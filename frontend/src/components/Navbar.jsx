import React from 'react'
import { assets } from './../assets/assets'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
    
    <img src={assets.logo} className='w-36' alt="" />
    
    <ul className=' hidden sm:flex sm:gap-5 lg:gap-14 sm:font-bold sm:text-xs  text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-0.5 hover:text-gray-500'>
          <p>HOME</p>
          <hr className='hidden w-3/4 h-[1.5px] border-none bg-gray-700' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-0.5 hover:text-gray-500'>
          <p>COLLECTION</p>
          <hr className='hidden w-3/4 h-[1.5px] border-none bg-gray-700' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-0.5 hover:text-gray-500'>
          <p>ABOUT</p>
          <hr className='hidden w-3/4 h-[1.5px] border-none bg-gray-700' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-0.5 hover:text-gray-500'>
          <p>CONTACT</p>
          <hr className='hidden w-3/4 h-[1.5px] border-none bg-gray-700 ' />
        </NavLink>

      </ul>
    
    </div>
  )
}

export default Navbar