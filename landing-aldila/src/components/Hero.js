// Hero.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import transporteImg from '/wamp64/www/proyectos/landing-aldila/src/assents/imagenes/transporte.png';
import tintoreriaImg from '/wamp64/www/proyectos/landing-aldila/src/assents/imagenes/tintoreria.png';
import comprasImg from '/wamp64/www/proyectos/landing-aldila/src/assents/imagenes/compras.png';
import comprasPremiumImg from '/wamp64/www/proyectos/landing-aldila/src/assents/imagenes/vinos.png';
import masajesImg from '/wamp64/www/proyectos/landing-aldila/src/assents/imagenes/masajes.png';
import reservacionesImg from '/wamp64/www/proyectos/landing-aldila/src/assents/imagenes/reservaciones.png';
import equipoAcuaticoImg from '/wamp64/www/proyectos/landing-aldila/src/assents/imagenes/equipo acuatico.png';
import barcosYatesImg from '/wamp64/www/proyectos/landing-aldila/src/assents/imagenes/yates.png';


const services = [
  { 
    name: "Servicio de transporte", 
    description: "Ponemos a tu disposición servicio de transporte para gestionar cualquier desplazamiento que necesites durante tu estancia. El pago se hará directamente al conductor.",
    image: transporteImg
  },
  { 
    name: "Tintorería a domicilio", 
    description: "Disfruta del servicio de tintorería en la comodidad de tu villa. Llamar  por teléfono al (744 443 4017). Costo mínimo: $400 MXN.",
    image: tintoreriaImg
  },
  { 
    name: "Servicio de compras", 
    description: "Ofrecemos compras básicas para el día de tu llegada. Nuestro equipo de trabajo, estará en contacto unos días antes de tu llegada para que le puedas compartir tu lista básica de supermercado El servicio tiene un costo de $250 MXN.",
    image: comprasImg
  },
  { 
    name: "Servicios de compras premium", 
    description: "Si necesitas compras mayores de supermercado, licores o cualquier otros artículos de belleza, farmacia, etc. durante tu estancia, nosotros nos encargamos (encargamos) de organizarlo. Costo del servicio: $350 MXN.",
    image: comprasPremiumImg
  },
  { 
    name: "Servicio de masajes", 
    description: "Disfruta de una sesión de masajes a domicilio con nuestro equipo de masajistas profesionales.",
    image: masajesImg
  },
  { 
    name: "Reservaciones", 
    description: "Podemos gestionar reservaciones en restaurantes, eventos y actividades culturales durante tu estancia.",
    image: reservacionesImg
  },
  { 
    name: "Renta de equipo acuático", 
    description: "Ofrecemos equipo para actividades acuáticas como SUP, kayaks y motos acuáticas. Reserva con 1 día de anticipación.",
    image: equipoAcuaticoImg
  },
  { 
    name: "Renta de barcos y yates", 
    description: "Renta una lancha o barco para disfrutar del mar. Reserva con 2 días de anticipación.",
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
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¡Bienvenidos a Casas y Villas!
        </motion.h1>

        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-description"
        >
          Disfruta de exclusivos servicios adicionales en el paradisiaco puerto de Acapulco, donde el mar toca el cielo.
        </motion.p>

        <motion.div
          className="hero-services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3>Servicios Adicionales</h3>
          <ul>
            {services.map((service) => (
              <motion.li 
                key={service.name}
                whileHover={{ scale: 1.1 }}
                onClick={() => openModal(service)}
              >
                {service.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="hero-button"
        >
          Contáctanos
        </motion.button>
      </div>

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
