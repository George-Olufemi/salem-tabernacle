import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './Animation/AnimatedRoutes';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Sermons from './Pages/Sermons';
// import LocateUs from './Pages/LocateUs';
// import ServiceTimes from './Pages/ServiceTimes';
// import NoMatch from './Pages/NoMatch';


function App() {
  return (
    <BrowserRouter> 
        <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
