// src/pages/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
import logo from '../assents/imagenes/logo.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); // Redirige a la página de registro
  };

  return (
    <div className="homepage-container">
      <div className="homepage-overlay"></div>
      <div className="homepage-content-wrapper">
        <div className="homepage-content">
          <h1>
            Bienvenido
          </h1>
          <p className="subtitle">
            a la página de recompensas de <span>Casas y Villas.</span>
          </p>
          <p className="description">
            Disfruta de promociones exclusivas, descuentos especiales y servicios de lujo,
            creados para hacer cada estancia aún más extraordinaria.
          </p>
          <button className="register-button" onClick={handleRegisterClick}>
            Registrarse
          </button>
          <p className="login-prompt">
            ¿Ya tienes cuenta? <a href="/login" className="login-link">Inicia sesión</a>
          </p>
        </div>
        <div className="homepage-logo-container">
          <img src={logo} alt="Logo Casas y Villas" className="homepage-logo" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
