import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/Home/Home';
import './App.css';


function App() {
  return(
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    <Route path="/home" element={<Home />} />
    </Routes>
    </div>
    <Footer />
    </Router>
    )
    
}

export default App;
