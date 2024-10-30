// Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import  '../styles/Footer.css';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-content">
        <motion.div whileHover={{ scale: 1.05 }}>
          <h4>Contacto</h4>
          <p>Dirección: Calle Ejemplo 123, Ciudad</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: contacto@villasrewards.com</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>Política de privacidad</li>
            <li>Términos y condiciones</li>
            <li>Preguntas frecuentes</li>
            <li>Síguenos en redes sociales</li>
          </ul>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <h4>Suscríbete</h4>
          <p>Recibe las últimas noticias y ofertas</p>
          <input type="email" placeholder="Tu email" />
          <button>Suscribirse</button>
        </motion.div>
      </div>

      <p className="footer-bottom">© 2024 Villas Rewards. Todos los derechos reservados.</p>
    </motion.footer>
  );
};

export default Footer;
