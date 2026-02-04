import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const heartSymbols = ['💕', '💖', '💗', '💝', '💘', '❤️', '💙', '💜'];
    
    const generateHearts = () => {
      const newHearts = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
          left: Math.random() * 100,
          animationDelay: Math.random() * 10,
          animationDuration: 8 + Math.random() * 4,
          size: 0.8 + Math.random() * 0.4
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`,
            animationDelay: `${heart.animationDelay}s`,
            animationDuration: `${heart.animationDuration}s`
          }}
          initial={{ y: '100vh', opacity: 0, rotate: 0 }}
          animate={{ 
            y: '-100vh', 
            opacity: [0, 1, 1, 0],
            rotate: 360,
            x: [0, 50, -30, 20, 0]
          }}
          transition={{
            duration: heart.animationDuration,
            repeat: Infinity,
            ease: "linear",
            delay: heart.animationDelay
          }}
        >
          {heart.symbol}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;