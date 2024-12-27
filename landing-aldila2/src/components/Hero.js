import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
// Importamos las imágenes
import transporteImg from '../assents/imagenes/transporte.png';
import tintoreriaImg from '../assents/imagenes/tintoreria.png';
import comprasImg from '../assents/imagenes/compras.png';
import comprasPremiumImg from '../assents/imagenes/vinos.png';
import masajesImg from '../assents/imagenes/masajes.png';
import reservacionesImg from '../assents/imagenes/reservaciones.png';
import equipoAcuaticoImg from '../assents/imagenes/equipo acuatico.png';
import barcosYatesImg from '../assents/imagenes/yates.png';

const services = [
  { 
    name: "Servicio de transporte", 
    description: "Ponemos a tu disposición servicio de transporte para gestionar cualquier desplazamiento que necesites durante tu estancia. El pago se hará directamente al conductor.",
    icon: "fa-solid fa-shuttle-van",
    image: transporteImg
  },
  { 
    name: "Tintorería a domicilio", 
    description: "Disfruta del servicio de tintorería en la comodidad de tu villa. Llamar por teléfono al (744 443 4017). Costo mínimo: $400 MXN.",
    icon: "fa-solid fa-soap",
    image: tintoreriaImg
  },
  { 
    name: "Servicio de compras", 
    description: "Ofrecemos compras básicas para el día de tu llegada. Nuestro equipo de trabajo estará en contacto unos días antes de tu llegada para que le puedas compartir tu lista básica de supermercado. El servicio tiene un costo de $250 MXN.",
    icon: "fa-solid fa-shopping-cart",
    image: comprasImg
  },
  { 
    name: "Servicios de compras premium", 
    description: "Si necesitas compras mayores de supermercado, licores o cualquier otros artículos de belleza, farmacia, etc., nosotros nos encargamos de organizarlo. Costo del servicio: $350 MXN.",
    icon: "fa-solid fa-shopping-bag",
    image: comprasPremiumImg
  },
  { 
    name: "Servicio de masajes", 
    description: "Disfruta de una sesión de masajes a domicilio con nuestro equipo de masajistas profesionales.",
    icon: "fa-solid fa-spa",
    image: masajesImg
  },
  { 
    name: "Reservaciones", 
    description: "Podemos gestionar reservaciones en restaurantes, eventos y actividades culturales durante tu estancia.",
    icon: "fa-solid fa-calendar-check",
    image: reservacionesImg
  },
  { 
    name: "Renta de equipo acuático", 
    description: "Ofrecemos equipo para actividades acuáticas como SUP, kayaks y motos acuáticas. Reserva con 1 día de anticipación.",
    icon: "fa-solid fa-water",
    image: equipoAcuaticoImg
  },
  { 
    name: "Renta de barcos y yates", 
    description: "Renta una lancha o barco para disfrutar del mar. Reserva con 2 días de anticipación.",
    icon: "fa-solid fa-ship",
    image: barcosYatesImg
  }
];

const Hero = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <motion.section
      className="hero"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.div
        className="hero-content"
        initial={{ y: '100vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1>
          ¡Bienvenidos a Casa Aldila!
        </motion.h1>

        <motion.p className="hero-description">
          Disfruta de exclusivos servicios adicionales en el paradisiaco puerto de Acapulco, donde el mar toca el cielo.
        </motion.p>

        <motion.div className="hero-services">
          <h3 className="hero-services-title">SERVICIOS ADICIONALES</h3>
          <div className="services-grid">
            {services.map((service) => (
              <motion.div 
                key={service.name}
                className="service-card"
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal(service)}
              >
                <i className={service.icon} style={{ fontSize: '2rem', marginBottom: '10px' }}></i>
                <h4>{service.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {selectedService && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={closeModal}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Se mantiene la imagen en el modal */}
            <img src={selectedService.image} alt={selectedService.name} className="modal-image" />
            <h2>{selectedService.name}</h2>
            <p>{selectedService.description}</p>
            <button onClick={closeModal}>Cerrar</button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Hero;
