import React from "react";
import './Announcement.css';
import campaign from '../campaign/audiophone.png';

function Announcement() {
    return(
        <React.Fragment>
            <div className="announcement h-full text-center py-16">
                <div className="flex justify-center items-center pb-10">
                    <img src={campaign} alt="campaign"/>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold pb-10">ANNOUNCEMENTS</h3>
                <p className="text-xl">No announcements for now</p>
            </div>
        </React.Fragment>
    );
}

export default Announcement;
