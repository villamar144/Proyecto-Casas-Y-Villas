import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderUsuario from '../Pages/HeaderUsuario';
import UsuarioInfo from '../Pages/UsuarioInfo';
import Buttons from '../Pages/Buttons';
import ServicesUser from '../Pages/ServicesUser';
import '../styles/Usuario.css';

const Usuario = () => {
  return (
    <div className="container">

      {/* seccion izquierda */}
      <div className="left-section">
        <HeaderUsuario />
        <UsuarioInfo />
      </div>
      
      <div className="right-section">
      {/* Contenedor para los botones superiores */}
      <div className="top-buttons-section">
        <Buttons />
      </div>

      {/* Contenedor para los botones de servicios */}
      <div className="services-section">
        <ServicesUser />
      </div>
    </div>


    </div>
  )
}
export default Usuario; 
