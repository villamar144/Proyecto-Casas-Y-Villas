import React, { useState } from 'react';
import { FaCar, FaShoppingCart, FaTshirt, FaSpa, FaCalendarAlt, FaSwimmer, FaShip, FaGift } from 'react-icons/fa';
import '../styles/servicesuser.css'; // Importa el CSS como un archivo regular

function ServicesUser() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { name: 'Transporte', icon: <FaCar />, description: 'Ponemos a tu disposición servicio de transporte para gestionar cualquier desplazamiento que necesites durante tu estancia. El pago se hará directamente al conductor.' },
    { name: 'Compras', icon: <FaShoppingCart />, description: 'Ofrecemos nuestro servicio de compras básicas para el día de tu llegada. Costo: $250 MXN, más el total de la compra.' },
    { name: 'Compras Premium', icon: <FaGift />, description: 'Servicio de compras mayores como supermercado, licores, farmacia. Costo: $350 MXN.' },
    { name: 'Tintorería a domicilio', icon: <FaTshirt />, description: 'Servicio de tintorería a tan solo un click. Costo mínimo: $400 MXN.' },
    { name: 'Masajes', icon: <FaSpa />, description: 'Contacta con nuestro equipo de masajistas a domicilio. Solicita lista de servicios y precios.' },
    { name: 'Reservaciones', icon: <FaCalendarAlt />, description: 'Gestionamos reservas en restaurantes, eventos culturales y salones de belleza. Sin costo adicional.' },
    { name: 'Renta de equipo acuático', icon: <FaSwimmer />, description: 'Coordinamos la renta de tablas SUP, kayaks, y motos acuáticas. Reserva con 1 día de anticipación.' },
    { name: 'Renta de barcos y yates', icon: <FaShip />, description: 'Renta lanchas o barcos para pesca o recreación. Reserva con 2 días de anticipación.' },
    { name: 'Más promociones', icon: <FaGift />, description: 'Descubre más promociones exclusivas durante tu estancia.' },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services">
      <h2>Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <button
            key={index}
            className="service-button"
            onClick={() => handleServiceClick(service)}
          >
            <span className="service-icon">{service.icon}</span>
            {service.name}
          </button>
        ))}
      </div>

      {selectedService && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedService.name}</h3>
            <p>{selectedService.description}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesUser;
