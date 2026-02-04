import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { memoriesData } from '../../data/content';
import './MemoriesGallery.css';

const MemoriesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % memoriesData.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(memoriesData[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? memoriesData.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(memoriesData[prevIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="memories-page">
      <motion.div 
        className="memories-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="memories-header" variants={itemVariants}>
          <h1 className="page-title">Our Precious Memories</h1>
          <p className="subtitle">Every picture tells a story of our love</p>
        </motion.div>

        <div className="gallery-grid">
          {memoriesData.map((memory, index) => (
            <motion.div
              key={memory.id}
              className="gallery-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(memory, index)}
            >
              <img 
                src={memory.src} 
                alt={memory.caption}
                className="gallery-image"
                onError={(e) => {
                  console.log('Image failed to load:', memory.src);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', memory.src);
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <div className="placeholder-content">
                  <div className="placeholder-icon">📸</div>
                  <div className="placeholder-text">Image not found</div>
                  <div className="placeholder-path">{memory.src}</div>
                </div>
              </div>
              <div className="image-overlay">
                <h3 className="image-caption">{memory.caption}</h3>
                <p className="image-date">{memory.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              
              <button className="modal-nav prev" onClick={prevImage}>
                <FaChevronLeft />
              </button>
              
              <button className="modal-nav next" onClick={nextImage}>
                <FaChevronRight />
              </button>

              <div className="modal-image-container">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.caption}
                  className="modal-image"
                  onError={(e) => {
                    console.log('Modal image failed to load:', selectedImage.src);
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="modal-placeholder" style={{ display: 'none' }}>
                  <div className="modal-placeholder-content">
                    <div className="modal-placeholder-icon">📸</div>
                    <div className="modal-placeholder-text">Image not found</div>
                    <div className="modal-placeholder-path">{selectedImage.src}</div>
                  </div>
                </div>
              </div>

              <div className="modal-info">
                <h3>{selectedImage.caption}</h3>
                <p>{selectedImage.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoriesGallery;