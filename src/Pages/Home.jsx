import React from "react";
import Hero from '../components/Hero';
import { Link } from "react-router-dom";    
import Sermons from "../components/Sermons";
import Announcement from "../components/Announcement";
import './Home.css';
import alarm from '../alarm/alarm.png'
import hr from '../hr/Line 15.png';
import Footer from '../components/Footer';

function Home() {
    return(
        <React.Fragment>
            <div>
                <Hero />
                    <div className="flex justify-between px-10 py-3 items-center">
                        <div>
                            <h3 className='text-xl font-semibold'>SERMONS</h3>
                        </div>
                        <Link to="/sermons">
                            <div className="flex transform hover:translate-x-4 transition-all duration-200">
                                <h1 className="text-gray-600">See all</h1>
                                <div><svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg></div>
                            </div>
                        </Link>
                    </div>
                <Sermons />
                <Announcement />
                    <div className="believe text-center py-20">
                        <h3 className='text-3xl font-semibold pb-10'>WHAT WE BELIEVE</h3>
                        <p className="text-xl px-5 block md:hidden">Salem Tabernacle is a Non-Denominational Bible Believing church. We believe in the End-Time Message as foretold in Malachi 4:5&6 Revelation 10:7, Luke 17:30 etc as delivered in our day by Prophet William Marrion Branham.</p>
                        <p className="text-xl px-5 hidden md:block">Salem Tabernacle is a Non-Denominational Bible<br /> Believing church. We believe in the End-Time Message<br /> as foretold in Malachi 4:5&6 Revelation 10:7,<br /> Luke 17:30 etc as delivered in our day by Prophet<br /> William Marrion Branham.</p>
                    </div>
                    {/* service times section */}
                    <div className="service text-center py-20">
                        <h3 className="text-3xl font-semibold pb-10">SERVICE TIMES</h3>
                            <div className="flex justify-center items-center">
                                <img src={alarm} alt="" />
                            </div>
                        {/* content */}
                        <h3 className="pt-9 pb-2 font-semibold text-lg">Sunday School Service</h3>
                        <h1 className="pb-4 time">8:30 am</h1>
                            <div className="flex justify-center items-center">
                                <img src={hr} alt="hr" />
                            </div>
                        {/* content 2 */}
                        <h3 className="pt-9 pb-2 font-semibold text-lg">Sunday Morning Service</h3>
                        <p className="pb-4 time">10:00 am</p>
                            <div className="flex justify-center items-center">
                                <img src={hr} alt="hr" />
                            </div>
                        {/* content 3 */}
                        <h3 className="pt-9 pb-2 font-semibold text-lg">Sunday Evening Service</h3>
                        <p className="pb-4 time">4:30 pm</p>
                            <div className="flex justify-center items-center">
                                <img src={hr} alt="hr" />
                            </div>
                        {/* content 4 */}
                        <h3 className="pt-9 pb-2 font-semibold text-lg">Wednesday Prayer Meeting</h3>
                        <p className="pb-4 time">5:00 pm</p>
                            <div className="flex justify-center items-center">
                                <img src={hr} alt="hr" />
                            </div>
                    </div>
                <div className="text-center py-10">
                    <h3 className="font-semibold text-3xl pb-5">STREAMING PLATFORMS</h3>
                    <p className="text-lg px-5 text-left block md:hidden">We stream our services via two major Platforms; <b>MixLR</b> and <b>Google Meet</b>. <b>MixLR</b> is used for Audio Streaming while <b>Google Meet</b> is used for Video Streaming. To get more information about our Streaming platforms or if you have any questions on our service Streaming times, Click <a className="text-blue-600 underline" href="https://forms.gle/wybscpa8PJBpWueG8" target="_blank">here</a>.</p>
                    <p className="text-lg px-5 text-center hidden md:block">We stream our services via two major Platforms;<br /> <b>MixLR</b> and <b>Google Meet</b>. <b>MixLR</b> is used for<br /> Audio Streaming while <b>Google Meet</b> is used for Video Streaming.<br /> To get more information about our Streaming platforms or<br /> if you have any questions on our service Streaming times, Click<br /> <a className="text-blue-600 underline" href="https://forms.gle/wybscpa8PJBpWueG8" target="_blank">here</a>.</p>
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default Home;
