import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaTimes, FaPhone } from 'react-icons/fa';
import './FloatingContact.css';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918143724405';
    const message = 'Hi! I saw your beautiful Valentine website and would like to know more about your web development services.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/velvetweb.in?igsh=MWNhbTgwcnN6aGExMg==', '_blank');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-contact">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="contact-menu"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="contact-option whatsapp"
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </motion.button>
            
            <motion.button
              className="contact-option instagram"
              onClick={handleInstagramClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
              <span>Instagram</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`floating-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? <FaTimes /> : <FaPhone />}
      </motion.button>

      <div className="floating-label">
        Need a website like this?
      </div>
    </div>
  );
};

export default FloatingContact;