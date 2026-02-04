import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa';
import './VelvetWebFooter.css';

const VelvetWebFooter = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918143724405';
    const message = 'Hi! I saw your beautiful Valentine website and would like to know more about your web development services.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/velvetweb.in?igsh=MWNhbTgwcnN6aGExMg==', '_blank');
  };

  return (
    <motion.footer 
      className="velvetweb-footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <div className="footer-branding">
          <motion.div 
            className="footer-logo"
            whileHover={{ scale: 1.05 }}
          >
            <FaHeart className="footer-heart" />
            <span className="footer-brand-name">VelvetWeb</span>
          </motion.div>
          <p className="footer-tagline">Creating Beautiful Digital Love Stories</p>
        </div>

        <div className="footer-services">
          <h4>Need a Website Like This?</h4>
          <p>We create stunning, romantic websites for special occasions</p>
          <div className="footer-buttons">
            <motion.button
              className="footer-btn whatsapp-btn"
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              <span>Get Quote on WhatsApp</span>
            </motion.button>
            
            <motion.button
              className="footer-btn instagram-btn"
              onClick={handleInstagramClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
              <span>Follow Us</span>
            </motion.button>
          </div>
        </div>

        <div className="footer-contact">
          <h4>Contact Details</h4>
          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <span>+91 8143724405</span>
          </div>
          <div className="contact-item">
            <FaInstagram className="contact-icon" />
            <span>@velvetweb.in</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 VelvetWeb. Crafted with <FaHeart className="inline-heart" /> for special moments</p>
      </div>
    </motion.footer>
  );
};

export default VelvetWebFooter;