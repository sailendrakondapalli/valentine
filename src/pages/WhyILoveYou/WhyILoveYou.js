import React from 'react';
import { motion } from 'framer-motion';
import { whyILoveYouData } from '../../data/content';
import './WhyILoveYou.css';

const WhyILoveYou = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="why-i-love-you-page">
      <motion.div 
        className="reasons-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="reasons-header" variants={itemVariants}>
          <h1 className="page-title">Why I Love You</h1>
          <p className="subtitle">Let me count the ways... though infinity isn't enough</p>
        </motion.div>

        <div className="reasons-list">
          {whyILoveYouData.map((item, index) => (
            <motion.div
              key={item.id}
              className="reason-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="reason-number">{index + 1}</div>
              <div className="reason-icon">
                <motion.span
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: index * 0.2 
                  }}
                >
                  {item.icon}
                </motion.span>
              </div>
              <div className="reason-text">
                <p>{item.reason}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="reasons-footer" variants={itemVariants}>
          <div className="infinite-love">
            <motion.div
              className="infinity-symbol"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ∞
            </motion.div>
            <p>And infinitely more reasons that words cannot express...</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyILoveYou;