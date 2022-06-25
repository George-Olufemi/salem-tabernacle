import React from "react";
import Timer from "../components/Timer";
import LivestreamNavbar from '../NavBars/LivestreamNavbar';
import './ServiceTimes.css';
import Modal from '../components/Modal';
import Footer from "../components/Footer";
//import { motion } from "framer-motion";


function ServiceTimes() {
    return(
        <React.Fragment>
            <div className="livestream h-screen md:h-screen">
                <LivestreamNavbar />
                    <div className='pb-5'>
                        <Timer />
                        {/* <h3 className='text-center text-2xl md:text-4xl pt-5 pb-5'>Greetings in the Precious Name of Jesus Christ!</h3>
                            <div className='px-5 md:px-32'>
                                <h3 className='text-base md:text-xl pb-3'>Today being Wednesday, our Church door opens by 5:00 pm but we will start the Live broadcast/stream by 5:30 pm, that is immediately the song service starts, tune in by 5:30 am  to fellowship with us.</h3>
                                <h3 className='text-base md:text-xl pb-5'>Both of the Platforms we stream through will be onAir by 5:30 am, click the Button below to get the Links. God bless you as you wait.</h3>
                                <div className='mb-10'>
                                    <Modal/>
                                </div>
                            </div> */}
                    </div>
            </div>
                <Footer />
        </React.Fragment>
    );
}

export default ServiceTimes;
