import React from "react";
import LocateUsNavbar from "../NavBars/LocateUsNavbar";
import './Locateus.css';
import churchpic from '../churchpic/photo_2022-06-03_10-50-10.png';
import Footer from "../components/Footer";
//import { motion } from "framer-motion";

function LocateUs() {
    return(
        <React.Fragment>
            <div className='locate h-auto'>
                <LocateUsNavbar />
                    <div className='px-4 md:px-16'>
                        <div className='md:flex md:justify-between md:px-10'>
                            <div className="md:pl-10 md:pt-5">
                                <h3 className='md:uppercase text-3xl pb-3 font-semibold pt-5'>Salem Tabernacle</h3>
                                <h1 className='text-lg pb-10'>3 Salem Close,<br /> Akarawak Street,<br /> Off Iko Ekwa Road,<br /> Eket,<br /> Akwa Ibom State.</h1>
                                {/*  */}
                                <h3 className='md:uppercase text-xl pb-3 font-semibold'>Phone</h3>
                                <h1>+234-803-707-1859</h1>
                                <h1>+234-806-330-2922</h1>
                                <h1 className='pb-10'>+234-810-101-9892</h1>
                                {/*  */}
                                <h3 className='md:uppercase text-xl pb-3 font-semibold'>Email</h3>
                                <h1>bekfem@yahoo.com</h1>
                            </div>
                            <div className='md:pr-16'>
                                <img className='w-96 pt-20' src={churchpic} alt="Church Pic" />
                            </div>
                        </div>
                        {/* map */}
                        <div className='pt-16 flex justify-center items-center pb-16'>
                            <iframe 
                                className='rounded-lg'
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4085.4400070863944!2d7.954195!3d4.6471333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067dd2be5b4ac71%3A0xc8427c09f84b2ca4!2sSalem%20Cl%2C%20524103%2C%20Eket!5e1!3m2!1sen!2sng!4v1655491118205!5m2!1sen!2sng" width="800" height="600">
                            </iframe>
                        </div>
                    </div>
                    <Footer />
            </div> 
        </React.Fragment>
    );
}

export default LocateUs;
