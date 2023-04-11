import React, { useState } from 'react'
import logo from "../../images/logo.png";
import {BsChevronDown}  from 'react-icons/bs'
import {RxDragHandleHorizontal,RxCross1} from 'react-icons/rx';
import { ImCross } from 'react-icons/im';

function Navbar() {
  const [menu, setMenu] = useState(false)
  return (
    <div className=' w-auto bg-[#6149CA] h-16 px-7 md:px-24 flex items-center justify-between'>
        <div>
            <img src={logo} alt="logo" className='w-full h-9 '/>
        </div>
        <div className='items-center hidden md:flex'>
            <ul className='flex items-center text-base text-white '>
                <li className='ml-5'>Our Mission</li>
                <li className='ml-5'>Who we are?</li>
                <li className='ml-5' >How Does it work</li>
                <li className='flex items-center ml-5' >About Wasiyyah<span><BsChevronDown className='pl-1'/></span></li>
                <li className='ml-5'>Contact Us</li>
                <li className='flex items-center ml-5 '>Eng <span><BsChevronDown className='pl-1'/></span></li>
            </ul>
            <button className='ml-10 bg-[#DEDEDE] rounded-md text-base font-bold text-[#675591] px-3 py-0.5 h-min' type="submit">Sign Up</button>
        </div>
        <RxDragHandleHorizontal className='flex w-8 h-8 text-white md:hidden' onClick={()=>{setMenu(!menu)}}/>
        <div className={` ${menu?"block":"hidden"} z-[1] absolute w-full h-full bg-midnight-blue top-0 left-0 rounded-br-full ease-in-out wduration-300`}>
          <div className="relative h-full bg-purple">
            <div className="absolute top-5 right-5">
                <RxCross1 size={30} style={{fill:'white'}} onClick={()=>{setMenu(!menu)}} className=" hover:animate-pulse" />
            </div>
            <ul className='flex flex-col items-center justify-center gap-10 pt-20 text-base text-white '>
                <li className='ml-5'>Our Mission</li>
                <li className='ml-5'>Who we are?</li>
                <li className='ml-5' >How Does it work</li>
                <li className='flex items-center ml-5' >About Wasiyyah<span><BsChevronDown className='pl-1'/></span></li>
                <li className='ml-5'>Contact Us</li>
                <li className='flex items-center ml-5 '>Eng <span><BsChevronDown className='pl-1'/></span></li>
                <button className='ml-10 bg-[#DEDEDE] rounded-md text-base font-bold text-[#675591] px-3 py-0.5 h-min' type="submit">Sign Up</button>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar