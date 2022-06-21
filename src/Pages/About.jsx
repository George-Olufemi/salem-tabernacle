import React from "react";
import './About.css';
import AboutUsNavbar from "../NavBars/AboutUsNavbar";
import fire from '../fire/pillaroffire.png';
import Footer from '../components/Footer';
//import { motion } from "framer-motion";

function About() {
    return(
        <React.Fragment>
            <div className="about h-auto">
                <AboutUsNavbar />
                    <div className="px-5 md:px-20">
                            <h3 className="font-semibold text-2xl md:text-2xl md:uppercase mt-5 pb-6">About us</h3>
                            <h2 className="text-base pb-4">We are honoured that you are visiting our Website.</h2>
                        <div className=''>
                            <h2 className="text-base md:text-center">Salem Tabernacle is a Non-Denominational Bible Believing church. We believe in the End-Time Message as foretold in Malachi 4:5&6 Revelation 10:7, Luke 17:30 etc as delivered in our day by Prophet William Marrion Branham.</h2>
                        </div>
                        <div className="flex justify-center items-center pt-4 md:pt-0 md:hidden">
                            <img className="rounded w-36 h-44" src={fire} alt="Pillar of Fire" />
                        </div>
                        <h3 className="text-base font-semibold text-center pt-6 md:uppercase pb-5">Our Vision and Mission</h3>
                        <h2 className="text-base md:text-center pb-9">At Salem Tabernacle, Our Vision and Mission is;</h2>
                        <h2 className="text-base font-semibold text-center pb-5">To preach and propagate the gospel of the Lord Jesus Christ and bring salvation to mankind for the purpose of the kingdom of God.</h2>
                        <h2 className="text-base font-semibold text-center pb-5">To preach righteousness and true holiness of our Lord Jesus Christ, To preach repentance and forgiveness of sin.</h2>
                        <h2 className="text-base font-semibold text-center pb-5">To preach and practice church ordinances according to God’s Word.</h2>
                        <h2 className="text-base font-semibold text-center pb-5">To stand by the principles of the Bible and the Message of the hour as given by the Prophet.</h2>
                        <h2 className="text-base font-semibold text-center pb-9">To help establish a personal relationship between you and your Maker.</h2>
                        <h2 className="text-base md:text-center pb-5">We believe that if we do our part by administering the True Word of God, we can expect to see the exceeding abundantly above all that we could ever ask or think of. Our doors are opened to anyone regardless of what denomination they belong to as we have No creed but Christ; no law but love; no Book but the Bible. Come, let us worship His majesty. </h2>
                        <h2 className="text-base md:text-center pb-5">Please use this site to access the informations regarding our services. Click the menu links for further information about our church. You can also find all our sermons from the 1st of July, 2022 till date on the sermons page. We look forward to hearing from you and answering any questions you might have.<br /> God Bless you.</h2>
                    </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default About;
