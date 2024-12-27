// client/src/pages/Login.js
import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../assents/FOTOS ALDILA/0014.jpg';
import img2 from '../assents/FOTOS ALDILA/0019.jpg';
import img3 from '../assents/FOTOS ALDILA/0022.jpg';
import img4 from '../assents/FOTOS LONTANANZA/Lontananza-13.jpg';
import img5 from '../assents/FOTOS LONTANANZA/Lontananza-16.jpg';
import img6 from '../assents/FOTOS LONTANANZA/Lontananza-14.jpg';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ correo, contraseña }),
        });

        const data = await response.json();

        if (response.ok) {
            // Guarda el correo y el userId del usuario en LocalStorage
            localStorage.setItem('loggedInUserEmail', data.correo);
            localStorage.setItem('userId', data.userId); // Agregar el userId

            navigate('/Usuario'); // Navega a la página del usuario
        } else {
            setError(data.message || 'Error al iniciar sesión');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error en el servidor');
    }
};


  return (
    <div className="login-wrapper">
      {/* Sección izquierda: formulario */}
      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </label>
          <button type="submit">Iniciar Sesión</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>

      {/* Sección derecha: carrusel */}
      <div className="carousel-container">
        <div className="carousel-login">
          <img src={img1} alt="Imagen 1" />
          <img src={img2} alt="Imagen 2" />
          <img src={img3} alt="Imagen 3" />
          <img src={img4} alt="Imagen 4" />
          <img src={img5} alt="Imagen 5" />
          <img src={img6} alt="Imagen 6" />
        </div>
      </div>
    </div>
  );
};

export default Login;
