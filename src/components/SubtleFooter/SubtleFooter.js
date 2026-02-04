import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './SubtleFooter.css';

const SubtleFooter = () => {
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
    <footer className="subtle-footer">
      <div className="footer-content">
        <span className="footer-text">Need a website like this?</span>
        <div className="footer-buttons">
          <button className="footer-btn whatsapp" onClick={handleWhatsAppClick} title="Contact via WhatsApp">
            <FaWhatsapp />
          </button>
          <button className="footer-btn instagram" onClick={handleInstagramClick} title="Follow on Instagram">
            <FaInstagram />
          </button>
        </div>
        <span className="footer-brand">VelvetWeb @2026</span>
      </div>
    </footer>
  );
};

export default SubtleFooter;