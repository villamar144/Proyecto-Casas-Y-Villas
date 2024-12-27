import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Usuario  from './Pages/Usuario';
import HomePage from "./Pages/HomePage";
import Villa from "./Pages/VillaLontananza";
import EditProfile from "./Pages/EditProfile";

function App() {
    const [user, setUser] = useState(null);  // Estado para almacenar la información del usuario
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página de inicio */}
        <Route path="/hero" element={<Hero />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/villa-lontananza" element={<Villa />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/usuario" element={<Usuario/>}/>
        <Route path="/editprofile" element={<EditProfile/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;