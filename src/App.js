import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import LocateUs from './Pages/LocateUs';
import ServiceTimes from './Pages/ServiceTimes';
import NoMatch from './Pages/NoMatch';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<LocateUs />} />
        <Route path="/contact" element={<ServiceTimes />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
