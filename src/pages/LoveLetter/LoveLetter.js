import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { loveLetterContent } from '../../data/content';
import './LoveLetter.css';

const LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showFullLetter, setShowFullLetter] = useState(false);

  const startTypewriter = () => {
    setIsTyping(true);
    setDisplayedText('');
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < loveLetterContent.length) {
        setDisplayedText(loveLetterContent.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 50);
  };

  const showInstantLetter = () => {
    setShowFullLetter(true);
    setDisplayedText(loveLetterContent);
    setIsTyping(false);
  };

  return (
    <div className="love-letter-page">
      <motion.div 
        className="letter-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="letter-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="page-title">A Letter From My Heart</h1>
          <p className="subtitle">Words that my heart whispers to yours</p>
        </motion.div>

        <motion.div 
          className="letter-paper"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="paper-lines"></div>
          
          <div className="letter-content">
            {!isTyping && !showFullLetter && (
              <div className="letter-controls">
                <motion.button
                  className="btn-romantic typewriter-btn"
                  onClick={startTypewriter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read with Typewriter Effect ✍️
                </motion.button>
                
                <motion.button
                  className="btn-romantic instant-btn"
                  onClick={showInstantLetter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Instantly 💕
                </motion.button>
              </div>
            )}

            {(isTyping || showFullLetter) && (
              <motion.div 
                className="letter-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <pre className="letter-content-text">
                  {displayedText}
                  {isTyping && <span className="cursor">|</span>}
                </pre>
              </motion.div>
            )}

            {(showFullLetter || (!isTyping && displayedText.length > 0)) && (
              <motion.div 
                className="letter-signature"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="signature-line"></div>
                <div className="signature-hearts">💕 💖 💕</div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {(showFullLetter || (!isTyping && displayedText.length > 0)) && (
          <motion.div 
            className="letter-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="footer-message">
              This letter will remain in my heart forever, just like you 💝
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LoveLetter;