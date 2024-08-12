import React from 'react';
import { AuthProvider } from './Context/AuthContext.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Allfood from './Component/Allfood';
import Homepage from './Pages/Homepage';
import Location from './Component/Location/location.jsx';
import AddToCollection from './Component/Home/AddToCollection.js';
import SearchResultsPage from './Component/SearchResult.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Allfood" element={<Allfood />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/addfood" element={<AddToCollection />} />

        </Routes>
        <Location/>
      </Router>
    </AuthProvider>
  );
}

export default App;
