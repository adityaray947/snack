import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Allfood from './Component/Allfood';
import Homepage from './Pages/Homepage';

export default function App() {
  return (
    <Router>
      <Routes>
       
        <Route  path='/' element={<Homepage />} />
        <Route path='/Allfood' element={<Allfood />} />
        
      </Routes>
    </Router>
  );
}
