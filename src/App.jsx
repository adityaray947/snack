import { AuthProvider, useAuth } from './Context/AuthContext.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Allfood from './Component/Allfood';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Allfood" element={<Allfood />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

