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
                                <h3 className='text-base pb-3'>Today being Sunday, our Church door opens by 8:45 am but we will start the Live broadcast/stream by 10:00 am that is immediately after the Sunday School Class, tune in by 10:00 am  to fellowship with us.</h3>
                                <h3 className='text-base pb-5'>Both of the Platforms we stream through will be onAir by 10:00 am, click the Button below to get the Links. God bless you as you wait.</h3>
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
