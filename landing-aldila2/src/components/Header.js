import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';

const NavBar = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showOffersDropdown, setShowOffersDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowServicesDropdown(false); // Cierra el menú al seleccionar un servicio
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleOfferClick = () => {
    setShowOffersDropdown(false); // Cierra el menú al seleccionar una oferta
  };

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
    // Opcional: si quieres cerrar el de ofertas si se abre servicios
    setShowOffersDropdown(false);
  };

  const toggleOffersDropdown = () => {
    setShowOffersDropdown(!showOffersDropdown);
    // Opcional: si quieres cerrar el de servicios si se abre ofertas
    setShowServicesDropdown(false);
  };

  const ModalServiceInfo = ({ service, onClose }) => {
    let content = '';
    switch(service) {
      case 'descripcion':
        content = 'Información detallada de nuestros servicios...';
        break;
      case 'staff':
        content = 'Nuestro equipo de trabajo está altamente calificado...';
        break;
      case 'seguridad':
        content = 'Proporcionamos alta seguridad en todas nuestras instalaciones...';
        break;
      case 'atencion':
        content = 'Atención personalizada las 24 horas del día...';
        break;
      case 'ubicacion':
        content = 'Estamos ubicados en un entorno privilegiado...';
        break;
      default:
        content = 'Información no disponible.';
    }

    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2>{service.charAt(0).toUpperCase() + service.slice(1)}</h2>
          <p>{content}</p>
          <button className="close-btn" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
        <li className="nav-item"><Link to="/benefits" className="nav-link">Beneficios</Link></li>

        {/* Menu desplegable Servicios con clic */}
        <li className="nav-item" onClick={toggleServicesDropdown}>
          <span className="nav-link">Servicios</span>
          {showServicesDropdown && (
            <ul className="dropdown-menu">
              <li onClick={() => handleServiceClick('descripcion')} className="dropdown-item">Descripcion de los servicios</li>
              <li onClick={() => handleServiceClick('staff')} className="dropdown-item">Staff</li>
              <li onClick={() => handleServiceClick('seguridad')} className="dropdown-item">Seguridad</li>
              <li onClick={() => handleServiceClick('atencion')} className="dropdown-item">Atencion</li>
              <li onClick={() => handleServiceClick('ubicacion')} className="dropdown-item">Ubicacion</li>
            </ul>
          )}
        </li>

        <li className="nav-item"><span className="nav-link">Reservaciones</span></li>

        {/* Menu desplegable Ofertas con clic */}
        <li className="nav-item" onClick={toggleOffersDropdown}>
          <span className="nav-link">Nuestras ofertas</span>
          {showOffersDropdown && (
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={handleOfferClick}><a href="/hero">casa aldila</a></li>
              <li className="dropdown-item" onClick={handleOfferClick}><Link to="/villa-lontananza">villa lontananza</Link></li>
            </ul>
          )}
        </li>
        <li className="nav-item"><Link to="/login" className="nav-link">Inicio de sesión</Link></li>
        <li className="nav-item"><Link to="/register" className="nav-link">Regístrate</Link></li>
      </ul>

      {selectedService && (
        <ModalServiceInfo 
          service={selectedService} 
          onClose={handleCloseModal}
        />
      )}
    </nav>
  );
};

export default NavBar;