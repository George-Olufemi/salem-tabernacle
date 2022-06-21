import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './HomeNavbar.css';

function SermonsNavbar() {
  const [open, setOpen] = useState(false);
  return(
    <React.Fragment>
    {/* navbbar for mobile */}
        <nav className="md:flex md:justify-end h-42 md:h-16 md:px-48 text-white z-50 hex md:bg-transparent md:hidden">
            {/* Logo div */}
            <div className="md:hidden pb-7">
                <h1 className="pt-5 pl-5 pb-5"></h1>
            </div>
            {/* hamburger */}
            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden">
                <ion-icon name={ open ? 'close' : 'menu' }></ion-icon>
            </div>
            {/* nav links div */}
            <div>
                <ul className={(open ? 'left-0':'-left-full') + ' md:flex pt-10 absolute md:static hex md:bg-transparent md:z-auto w-full h-full md:w-auto transition-all duration-500'}>
                    <Link to="/"><li className='pr-7 pl-7 pb-3 pt-3 md:pt-0 text-center text-2xl tracking-wider md:border-b-4 transition-all hover:scale-105'>Home</li></Link>
                    <Link to="/about-us"><li className='pr-7 pl-7 pb-3 pt-3 md:pt-0 text-center text-2xl tracking-wider transition-all hover:scale-105'>About Us</li></Link>
                    <Link to="/sermons"><li className='pr-7 pl-7 pb-3 pt-3 md:pt-0 text-center text-2xl tracking-wider transition-all hover:scale-105'>Sermons</li></Link>
                    <Link to="/livestream"><li className='pr-7 pl-7 pb-3 pt-3 md:pt-0 text-center text-2xl tracking-wider transition-all hover:scale-105'>Live Stream</li></Link>
                    <Link to="/locate-us"><li className='pr-7 pl-7 pb-3 pt-3 md:pt-0 text-center text-2xl tracking-wider transition-all hover:scale-105'>Locate Us</li></Link>
                </ul>
            </div>
        </nav>
        {/* navbbar for md-lg screens */}
        <nav className="md:flex md:justify-end h-42 md:h-16  text-yellow-700 z-50 md:bg-transparent hidden md:block">
            {/* Logo div */}
            <div className="md:hidden pb-7">
                <h1 className="pt-5 pl-5 pb-5"></h1>
            </div>
            {/* hamburger */}
            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden">
                <ion-icon name={ open ? 'close' : 'menu' }></ion-icon>
            </div>
            {/* nav links div */}
            <div className="">
                <ul className={(open ? 'left-0':'-left-full') + ' md:flex pt-5 absolute md:static md:bg-transparent md:z-auto w-full h-full md:w-auto transition-all duration-300'}>
                    <Link to="/"><li className='mr-10 pt-3 md:pt-0 text-center text-lg tracking-wider transition-all hover:scale-105'>Home</li></Link>
                    <Link to="/about-us"><li className='mr-10 pt-3 md:pt-0 text-center text-lg tracking-wider transition-all hover:scale-105'>About Us</li></Link>
                    <Link to="/sermons"><li className='mr-10  md:pt-0 text-center text-lg tracking-wider transition-all hover:scale-105 border-yellow-700 md:hover:border-yellow-700 md:border-b-4'>Sermons</li></Link>
                    <Link to="/livestream"><li className='mr-10 pb-3 md:pt-0 text-center text-lg tracking-wider md:hover:border-white transition-all hover:scale-105'>Live Stream</li></Link>
                    <Link to="/locate-us"><li className='mr-16 pt-3 md:pt-0 text-center text-lg tracking-wider md:hover:border-white transition-all hover:scale-105'>Locate Us</li></Link>
                </ul>
            </div>
        </nav>
    </React.Fragment>
  );
}

export default SermonsNavbar;
