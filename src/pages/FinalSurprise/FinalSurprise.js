import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { finalSurpriseMessage } from '../../data/content';
import './FinalSurprise.css';

const FinalSurprise = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Auto-show message after a delay
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    setShowConfetti(true);
    
    // Generate confetti pieces
    const pieces = [];
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
        symbol: ['💕', '💖', '💗', '💝', '💘', '❤️', '🌹', '✨'][Math.floor(Math.random() * 8)]
      });
    }
    setConfettiPieces(pieces);

    // Stop confetti after 5 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3
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
    <div className="final-surprise-page">
      {/* Confetti */}
      {showConfetti && (
        <div className="confetti-container">
          {confettiPieces.map((piece) => (
            <motion.div
              key={piece.id}
              className="confetti-piece"
              style={{
                left: `${piece.left}%`,
              }}
              initial={{ y: -100, opacity: 0, rotate: 0 }}
              animate={{ 
                y: window.innerHeight + 100, 
                opacity: [0, 1, 1, 0],
                rotate: 360,
                x: [0, 50, -30, 20, 0]
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: "linear"
              }}
            >
              {piece.symbol}
            </motion.div>
          ))}
        </div>
      )}

      <motion.div 
        className="surprise-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="surprise-header" variants={itemVariants}>
          <motion.h1 
            className="surprise-title"
            animate={{ 
              scale: [1, 1.05, 1],
              color: ['#d63384', '#ff6b9d', '#ff8fab', '#d63384']
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {finalSurpriseMessage.title}
          </motion.h1>
        </motion.div>

        <AnimatePresence>
          {showMessage && (
            <motion.div 
              className="surprise-content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="message-card">
                <motion.div 
                  className="heart-decoration"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity 
                  }}
                >
                  💖
                </motion.div>
                
                <div className="message-text">
                  <p>{finalSurpriseMessage.message}</p>
                </div>
                
                <div className="message-signature">
                  <p>{finalSurpriseMessage.signature}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="surprise-actions" variants={itemVariants}>
          <motion.button
            className="btn-romantic confetti-btn"
            onClick={triggerConfetti}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                '0 4px 15px rgba(255, 107, 157, 0.3)',
                '0 8px 25px rgba(255, 107, 157, 0.5)',
                '0 4px 15px rgba(255, 107, 157, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Celebrate Our Love! 🎉
          </motion.button>
        </motion.div>

        <motion.div className="surprise-footer" variants={itemVariants}>
          <div className="love-stats">
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.1 }}
            >
              <div className="stat-icon">💕</div>
              <div className="stat-text">Forever & Always</div>
            </motion.div>
            
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.1 }}
            >
              <div className="stat-icon">🌟</div>
              <div className="stat-text">You're My Star</div>
            </motion.div>
            
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.1 }}
            >
              <div className="stat-icon">🏠</div>
              <div className="stat-text">You're My Home</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="final-message"
          variants={itemVariants}
          animate={{ 
            color: ['#d63384', '#ff6b9d', '#ff8fab', '#d63384']
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <p>Happy Valentine's Day, My Love! 💝</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FinalSurprise;