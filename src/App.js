import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Destination from './pages/Destination';
import LocationFinder from './pages/LocationFinder';
import RouteOverview from './pages/RouteOverview';
import StepByStep from './pages/StepByStep';
import Arrival from './pages/Arrival';
import OfflineInfo from './pages/OfflineInfo';

function App() {
  return (
    <Router>
      <div style={{
        maxWidth: '390px', // typical mobile width (iPhone 13 mini)
        margin: '0 auto',
        height: '100vh',
        background: '#f7f7f7',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        overflowY: 'auto',
        borderRadius: '12px'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/location" element={<LocationFinder />} />
          <Route path="/route" element={<RouteOverview />} />
          <Route path="/steps" element={<StepByStep />} />
          <Route path="/arrival" element={<Arrival />} />
          <Route path="/offline" element={<OfflineInfo />} />


        </Routes>
      </div>
    </Router>
  );
}


export default App;
