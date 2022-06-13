import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Sermons from './Pages/Sermons';
import LocateUs from './Pages/LocateUs';
import ServiceTimes from './Pages/ServiceTimes';
import NoMatch from './Pages/NoMatch';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/locate-us" element={<LocateUs />} />
        <Route path="/servicetimes" element={<ServiceTimes />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
