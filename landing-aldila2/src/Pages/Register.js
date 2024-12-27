import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [step, setStep] = useState(0); // Controla el paso actual del formulario
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    correo: '',
    nombre: '',
    apellido: '',
    contraseña: '',
    telefono: ''
  });
  const [error, setError] = useState(null);



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 4) setStep(step + 1); // Avanza al siguiente paso
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/register', formData);
      alert(response.data.message);
      navigate('/login'); // Redirige a la página de login si se registró con éxito
    } catch (err) {
      setError('Error al comunicarse con el servidor');
    }
  };
  

  return (
    <div className="register-container">
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        {/* Mostrar los campos dinámicamente según el paso */}
        <div className={`form-group ${step === 0 ? 'visible' : ''}`}>
          <label>
            Correo Electrónico:
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className={`form-group ${step === 1 ? 'visible' : ''}`}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className={`form-group ${step === 2 ? 'visible' : ''}`}>
          <label>
            Apellido:
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className={`form-group ${step === 3 ? 'visible' : ''}`}>
          <label>
            Contraseña:
            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className={`form-group ${step === 4 ? 'visible' : ''}`}>
          <label>
            Teléfono:
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Botón para avanzar o registrar */}
        {step < 4 ? (
          <button type="button" onClick={handleNext}>
            Siguiente
          </button>
        ) : (
          <button type="submit">Registrar</button>
        )}
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Register;
