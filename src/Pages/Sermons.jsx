import React from "react";
import './Sermons.css';
import SermonsNavbar from "../NavBars/SermonsNavbar";
//import { motion } from "framer-motion";
import Footer from '../components/Footer';

function Sermons() {
  return(
    <React.Fragment>
        <div className="rte h-screen">
          <SermonsNavbar />
            <div className="flex justify-center items-center pt-64 md:pt-64">
              <h3 className='text-xl md:text-4xl pl-3'>There are no Sermons to display...</h3>
            </div>
        </div>
        <Footer />
    </React.Fragment>
  );
}

export default Sermons;
