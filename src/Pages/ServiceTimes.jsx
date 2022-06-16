import React from "react";
import Timer from "../components/Timer";
import LivestreamNavbar from '../NavBars/LivestreamNavbar';
import './ServiceTimes.css'


function ServiceTimes() {
    return(
        <React.Fragment>
            <div className="livestream h-auto md:h-screen">
                <LivestreamNavbar />
                    <div>
                        <Timer />
                    </div>
            </div>
        </React.Fragment>
    );
}

export default ServiceTimes;
