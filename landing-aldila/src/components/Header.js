import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Menu.css';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false); // Estado para el nuevo submenú de Beneficios
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleBenefitsDropdown = () => setIsBenefitsOpen(!isBenefitsOpen); // Función para alternar el submenú de Beneficios

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const benefitsContent = {
    'Descripción general de los beneficios': {
      title: 'Descripción general de los beneficios',
      details: [
        { label: 'Staff', text: 'Nuestro equipo de profesionales está disponible para ayudarle en cada momento.' },
        { label: 'Atención Personalizada', text: 'Atención dedicada a cada detalle para hacer su estancia inolvidable.' },
        { label: 'Seguridad en su Renta', text: 'La villa cuenta con acceso restringido y seguridad 24/7.' },
        { label: 'Capacidad', text: 'Espacio ideal para familias y grupos, con amplias instalaciones.' },
      ],
    },
    // Información para el submenú de Servicios
    Staff: {
      title: 'Staff',
      details: [
        { label: 'Nuestro equipo', text: 'El staff que se encargará del servicio de la casa durante su estancia...' },
      ],
    },
    Seguridad: {
      title: 'Seguridad en la renta',
      details: [
        { label: 'Mantente Seguro', text: 'Somos un negocio perfectamente establecido...' },
      ],
    },
    Atencion: {
      title: 'Atencion personalizada',
      details: [
        { label: 'Atencion profesional', text: 'Nuestro personal está preparado para brindarle atención personalizada...' },
      ],
    },
    Ubicacion: {
      title: 'Ubicacion',
      details: [
        { label: 'Ubicacion', text: 'Ubicada en Pichilingue Diamante con seguridad privada 24/7' },
      ],
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="navbar"
      >
        <ul className="nav-menu">
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            Inicio
          </motion.li>

          {/* Submenú de Servicios */}
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={toggleDropdown}
            className="dropdown"
          >
            Servicios
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="dropdown-menu"
                >
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Descripción general de los beneficios')}>
                    Descripción general de los servicios
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Staff')}>
                    Staff
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Seguridad')}>
                    Seguridad
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Atencion')}>
                    Atencion 
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Ubicacion')}>
                    Ubicacion 
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>

          {/* Submenú de Beneficios */}
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={toggleBenefitsDropdown}
            className="dropdown"
          >
            Servicios Adicionales
            <AnimatePresence>
              {isBenefitsOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="dropdown-menu"
                >
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Descripción general de los beneficios')}>
                    Descripción general de los beneficios
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Staff')}>
                    Staff
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Seguridad')}>
                    Seguridad
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Atencion')}>
                    Atencion
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.1 }} onClick={() => openModal('Ubicacion')}>
                    Ubicacion
                  </motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>

          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            Reservaciones
          </motion.li>
          
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            Inicio de sesión
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            Registrate
          </motion.li>
        </ul>
      </motion.nav>

      {/* Modal para mostrar información en pantalla completa */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{benefitsContent[modalContent]?.title}</h2>
              <ul>
                {benefitsContent[modalContent]?.details.map((item, index) => (
                  <li key={index}>
                    <strong>{item.label}: </strong>{item.text}
                  </li>
                ))}
              </ul>
              <button onClick={closeModal}>Cerrar</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
