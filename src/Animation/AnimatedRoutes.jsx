import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Sermons from '../Pages/Sermons';
import LocateUs from '../Pages/LocateUs';
import ServiceTimes from '../Pages/ServiceTimes';
import NoMatch from '../Pages/NoMatch';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation(); 
  return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname} > 
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/livestream" element={<ServiceTimes />} />
            <Route path="/locate-us" element={<LocateUs />} />
            <Route path="/*" element={<NoMatch />} />
        </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes;
