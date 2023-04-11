import React from 'react'
import logo from "../../images/logo.png";
import app_store from "../../images/app_store.png";
import play_store from "../../images/play_store.png";
import fb from "../../images/fb.png";
import insta from "../../images/insta.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";

function Footer() {
  return (
    <div className='px-4 py-8 bg-purple'>
        <div className='flex flex-col justify-center gap-10 text-white md:items-start item-center md:flex-row md:justify-evenly md:gap-0'>
            <div className='flex items-center justify-center w-full md:w-max md:items-start md:justify-start'>
                <img src={logo} alt="logo" className=' h-9'/>
            </div>
            <div className='flex flex-col items-center gap-2 md:items-start'>
                <p>Login</p>
                <p>Sign Up</p>
                <p>Legal Term and Conditions</p>
                <p>© All rights Reseved</p>
            </div>
            <div className='flex flex-col items-center gap-2 md:items-start md:justify-start'>
                <h2 className='mb-3 font-extrabold'>Download Our Apps</h2>
                <img src={play_store} alt="Google Play Logo" className='w-32 h-10 '/>
                <img src={app_store} alt="App Store Logo" className='w-32 h-10 '/>
            </div>
             <div className='flex flex-col items-center gap-2 md:items-start md:justify-start'>
                <h2 className='mb-3 font-extrabold'>Sharing is caring be a part of our journey</h2>
                <div className='flex flex-row items-center gap-7'>
                <img src={fb} alt="Facebook" className='w-4 h-6'/>
                <img src={insta} alt="Instagram" className='w-6 h-6 '/>
                <img src={twitter} alt="Twitter" className='w-8 h-6 '/>
                <img src={youtube} alt="YouTube" className='w-6 h-4 '/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer