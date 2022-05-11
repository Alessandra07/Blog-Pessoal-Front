import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/Home/Home';
import './App.css';
import Login from './paginas/Login/Login'
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTemas/ListaTema'
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

        <Route path="/tema" element={<ListaTema />} />

        <Route path="/postagem" element={<ListaPostagem />} />


      </Routes>
      <Footer />
    </Router>

  );
}

export default App;