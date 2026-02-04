import React from 'react';
import { motion } from 'framer-motion';
import { specialMomentsData } from '../../data/content';
import './SpecialMoments.css';

const SpecialMoments = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="special-moments-page">
      <motion.div 
        className="moments-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="moments-header" variants={itemVariants}>
          <h1 className="page-title">Special Moments</h1>
          <p className="subtitle">Celebrating the days that made our hearts skip a beat</p>
        </motion.div>

        <div className="moments-grid">
          {specialMomentsData.map((moment, index) => (
            <motion.div
              key={moment.id}
              className="moment-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -10 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="moment-icon">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {moment.icon}
                </motion.span>
              </div>
              
              <div className="moment-content">
                <h3 className="moment-title">{moment.title}</h3>
                <div className="moment-date">{moment.date}</div>
                <p className="moment-description">{moment.description}</p>
                <div className="moment-note">
                  <p>"{moment.note}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="moments-footer" variants={itemVariants}>
          <div className="love-message">
            <motion.p
              animate={{ 
                color: ['#d63384', '#ff6b9d', '#ff8fab', '#d63384']
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Every moment with you becomes a treasured memory ✨
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SpecialMoments;