import React from "react";
import './Sermons.css';
import SermonsNavbar from "../NavBars/SermonsNavbar";

function Sermons() {
  return(
    <React.Fragment>
        <div className="sermons h-screen">
          <SermonsNavbar />
            <div className="flex justify-center items-center pt-96 md:pt-64">
              <h3 className='text-2xl md:text-4xl'>There are no Sermons to display...</h3>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Sermons;
