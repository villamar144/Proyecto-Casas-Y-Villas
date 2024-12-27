import React, { useState } from 'react';
import '../styles/VillaLontananza.css';
import headerImage from '../assents/FOTOS LONTANANZA/Lontananza-16.jpg';

// Imágenes para la galería (ajusta las rutas según tu proyecto)
import galeria1 from '../assents/FOTOS LONTANANZA/Lontananza-13.jpg';
import galeria2 from '../assents/FOTOS LONTANANZA/Lontananza-14.jpg';
import galeria3 from '../assents/FOTOS LONTANANZA/Lontananza-15.jpg';
import galeria4 from '../assents/FOTOS LONTANANZA/Lontananza-16.jpg';

// Datos con íconos Font Awesome en lugar de imágenes
// Cambiamos fa-shield-halved por fa-shield-alt para asegurar visibilidad
const caracteristicasData = [
  { icon: 'fas fa-umbrella-beach', title: "Club Las Brisas", info: "Acceso al Club Las Brisas para disfrutar de sus instalaciones." },
  { icon: 'fas fa-shield-alt', title: "Seguridad 24/7", info: "Vigilancia continua para garantizar tu tranquilidad durante la estancia." },
  { icon: 'fas fa-concierge-bell', title: "Servicios Adicionales", info: "Reservas de transporte, tintorería, compras a domicilio y más." },
  { icon: 'fas fa-wifi', title: "Wi-Fi Gratuito", info: "Conéctate sin costo a nuestra red inalámbrica de alta velocidad." }
];

const serviciosIncluidosData = [
  { icon: 'fas fa-broom', title: "Limpieza diaria", info: "Servicio de limpieza diario para mantener la villa en óptimas condiciones." },
  { icon: 'fas fa-utensils', title: "Desayuno continental", info: "Disfruta de un delicioso desayuno continental incluido." },
  { icon: 'fas fa-spa', title: "Acceso al SPA", info: "Relájate con acceso al SPA y sus tratamientos revitalizantes." },
  { icon: 'fas fa-bell-concierge', title: "Servicio de Concierge", info: "Asistencia personalizada para cubrir todas tus necesidades." }
];

const VillaLontananza = () => {
  const [modalInfo, setModalInfo] = useState(null);

  const openModal = (item) => {
    setModalInfo(item);
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <div className="villa-lontananza-page">
      <header className="villa-header" style={{ backgroundImage: `url(${headerImage})` }}>
        <h1>VILLA LONTANANZA</h1>
      </header>

      <section className="info-section">
        <h2>Características</h2>
        <div className="cards-container">
          {caracteristicasData.map((item, idx) => (
            <div key={idx} className="info-card" onClick={() => openModal(item)}>
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h2>Servicios Incluidos</h2>
        <div className="cards-container">
          {serviciosIncluidosData.map((item, idx) => (
            <div key={idx} className="info-card" onClick={() => openModal(item)}>
              <i className={item.icon}></i>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="galeria-section">
        <h2>Galería</h2>
        <div className="galeria-grid">
          <img src={galeria1} alt="Galería 1" />
          <img src={galeria2} alt="Galería 2" />
          <img src={galeria3} alt="Galería 3" />
          <img src={galeria4} alt="Galería 4" />
        </div>
      </section>

      {modalInfo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalInfo.title}</h2>
            <p>{modalInfo.info}</p>
            <button className="modal-close" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VillaLontananza;
