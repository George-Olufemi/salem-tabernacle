import React from "react";
import Hero from '../components/Hero';
import { Link } from "react-router-dom";    
import Sermons from "../components/Sermons";
import Announcement from "../components/Announcement";

function Home() {
    return(
        <React.Fragment>
            <div>
                <Hero />
                    <div className="flex justify-between px-10 py-3 items-center">
                        <div>
                            <h1 className='text-xl font-semibold'>SERMONS</h1>
                        </div>
                        <Link to="/sermons">
                            <div className="flex">
                                <h1 className="text-gray-600">See all</h1>
                                <div><svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg></div>
                            </div>
                        </Link>
                    </div>
                <Sermons />
                <Announcement />
            </div>
        </React.Fragment>
    );
}

export default Home;
