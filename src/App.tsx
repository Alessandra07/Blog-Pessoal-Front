import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/Home/Home';
import Login from './paginas/Login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';


function App() {
  return(
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    <Route path="/" element={<Login />} />

<Route path="/home" element={<Home />} />

<Route path="/login" element={<Login />} />

<Route path="/cadastrousuario" element={<CadastroUsuario />} />


    
    </Routes>
    </div>
    <Footer />
    </Router>
    )
    

}

export default App;
