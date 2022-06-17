import React from "react";
import './Sermons.css';
import SermonsNavbar from "../NavBars/SermonsNavbar";
import { motion } from "framer-motion";

function Sermons() {
  return(
    <React.Fragment>
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%", transition: { duration: 0.9 } }}
          exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.9 } }}
          className="rte h-screen"
          >
          <SermonsNavbar />
            <div className="flex justify-center items-center pt-96 md:pt-64">
              <h3 className='text-2xl md:text-4xl'>There are no Sermons to display...</h3>
            </div>
        </motion.div>
    </React.Fragment>
  );
}

export default Sermons;
