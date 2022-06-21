import React from "react";
import './Hero.css';
import HomeNavbar from '../NavBars/HomeNavbar';
import { Link } from 'react-router-dom';

function Hero() {
  return(
    <React.Fragment>
        <div className='hero h-screen'>
            <HomeNavbar />
            <div className="block md:hidden">
                <h1 className="text-white text-3xl font-semibold pt-32 md:pt-52 pl-5"><span className="text-white text-3xl opacity-100">"</span>I was glad when they said unto me, Let us go into the house of the Lord.<span className="text-white text-3xl">"</span></h1>
                <h2 className="text-white text-2xl font-semibold pl-5 pt-12">Worship with us @</h2>
                <h2 className="text-white text-2xl font-semibold pl-5 pt-5">Salem Tabernacle</h2>
                    <div className="pt-9 pl-5">
                        <Link to="/sermons">
                            <button 
                                className="font-semibold text-white hex px-3 py-2 rounded shadow-lg hover:scale-105 transition-all duration-300">View sermons
                            </button>
                        </Link>
                    </div>
            </div>
            <div className="hidden md:block">
                <h1 className="md:text-5xl text-white pt-36 font-semibold pl-24"><span className="text-white font-bold text-6xl">"</span>I was glad when they said unto<br /> me, Let us go into the house of<br /> the Lord.<span className="text-white font-bold text-6xl">"</span></h1>
                <h2 className="md:text-3xl font-semibold text-white pl-24 pt-10">Worship with us @</h2>
                <h2 className="md:text-3xl font-semibold text-white pl-24 pt-2">Salem Tabernacle</h2>
                    <div className="pl-24 pt-10">
                        <Link to="/sermons">
                            <button 
                                className="md:text-xl font-semibold text-white hex px-3 py-2 rounded shadow-lg hover:scale-105 transition-all duration-300">View sermons
                            </button>
                        </Link>
                    </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Hero;
