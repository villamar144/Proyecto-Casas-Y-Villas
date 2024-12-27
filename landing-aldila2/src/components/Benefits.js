import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Benefits.css';

// Definición de los beneficios con íconos y colores
const benefits = [
  {
    name: "Descuentos Progresivos por Estancias Largas:",
    description: "• 10% de descuento para estancias de 1 semana.\n• 15% de descuento para estancias de 2 semanas.\n• 20% de descuento para estancias de 3 semanas.\n• 25% de descuento para reservas mensuales.\n• Restricción: Estos descuentos no aplican en temporada alta.",
    editableText: "Descuento por larga estancia",
    icon: "fa-solid fa-percent",
    iconColor: "#1e90ff" // azul intenso
  },
  {
    name: "Puntos por reserva:",
    description: "• Gana puntos por cada estancia\n• Canjeables por descuentos\n• 1 noche gratis\n• Check-out tarde.",
    editableText: "Gana Puntos",
    icon: "fa-solid fa-gift",
    iconColor: "#ff7f50" // coral
  },
  {
    name: "Membresia Bronce (Paquete de bienvenida):",
    description: "• Snacks y aguas\n• Obtén 10% de descuento en tus siguientes reservas desde tu primer estancia",
    editableText: "Membresía Bronce",
    icon: "fa-solid fa-medal",
    iconColor: "#cd7f32" // color bronce
  },
  {
    name: "Membresia Plata",
    description: "• Early Check-In / Late Check-Out.\n• Paquete de bienvenida: Snacks y vino\n• Obtén 15% de descuento con código (no aplica en temporada alta)",
    editableText: "Membresía Plata",
    icon: "fa-solid fa-award",
    iconColor: "#c0c0c0" // color plata
  },
  {
    name: "Membresia ORO",
    description: "• Early Check-In / Late Check-Out.\n• Noches gratis: Una noche gratuita cada 10 noches reservadas.\n• Gestor personal: Concierge dedicado. Regalo especial: Set de productos locales\n• Obtén 15% de descuento con código VILLAS2024 en nuestras siguientes reservas (mín. 2 noches)",
    editableText: "Membresía ORO",
    icon: "fa-solid fa-crown",
    iconColor: "#ffd700" // color dorado
  },
  {
    name: "Afiliados",
    description: "Recompensas por referir amigos que reserven.\nCrea un código para compartir con amigos; al reservar, los amigos reciben un descuento y el que refiere recibe 10% de descuento en sus próximas reservas.",
    editableText: "Ventajas de afiliados",
    icon: "fa-solid fa-user-friends",
    iconColor: "#6a5acd" // un tono violeta
  },
  {
    name: "Celebra momentos especiales con nosotros",
    description: "Recibe 10% de descuento en nuestra página web en tu próxima estancia (mínimo 2 noches) para tu cumpleaños. (CUMPLE10)",
    editableText: "Festeja con nosotros",
    icon: "fa-solid fa-birthday-cake",
    iconColor: "#ff69b4" // rosa fuerte
  }
];

const Benefits = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const openModal = (benefit) => {
    setSelectedBenefit(benefit);
  };

  const closeModal = () => {
    setSelectedBenefit(null);
  };

  return (
    <motion.section className="benefits-section"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 className="benefits-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        BENEFICIOS
      </motion.h2>
      
      <motion.div className="carousel"
        initial="hidden"
        animate="visible"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="carousel-item"
            whileHover={{ scale: 1.1 }}
            onClick={() => openModal(benefit)}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <i className={benefit.icon} style={{ fontSize: '3rem', color: benefit.iconColor }}></i>
            <p className="carousel-text">{benefit.editableText}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedBenefit && (
        <motion.div className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ya no hay imagen aquí */}
            <h2>{selectedBenefit.name}</h2>
            <p className="modal-description">{selectedBenefit.description}</p>
            <button onClick={closeModal}>Cerrar</button>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Benefits;
