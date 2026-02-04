import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { personalData } from '../../data/content';
import FloatingHearts from '../../components/FloatingHearts/FloatingHearts';
import './Home.css';

const Home = () => {
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const startDate = new Date(personalData.relationshipStart);
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysTogether(diffDays);
  }, []);

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
    hidden: { y: 20, opacity: 0 },
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
    <div className="home-page">
      <FloatingHearts />
      
      <motion.div 
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="welcome-section" variants={itemVariants}>
          <motion.h1 
            className="welcome-title"
            animate={{ 
              scale: [1, 1.05, 1],
              color: ['#d63384', '#ff6b9d', '#d63384']
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {personalData.welcomeMessage}
          </motion.h1>
          
          <motion.h2 
            className="her-name"
            variants={itemVariants}
          >
            {personalData.herName}
          </motion.h2>
          
          <motion.p 
            className="sweet-quote"
            variants={itemVariants}
          >
            "{personalData.sweetQuote}"
          </motion.p>
        </motion.div>

        <motion.div className="stats-section" variants={itemVariants}>
          <div className="stat-card">
            <motion.div 
              className="stat-number"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {daysTogether}
            </motion.div>
            <div className="stat-label">Days of Love</div>
          </div>
          
          <div className="stat-card">
            <motion.div 
              className="stat-number"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ∞
            </motion.div>
            <div className="stat-label">Reasons I Love You</div>
          </div>
          
          <div className="stat-card">
            <motion.div 
              className="stat-number"
              animate={{ 
                color: ['#d63384', '#ff6b9d', '#ff8fab', '#d63384']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaHeart />
            </motion.div>
            <div className="stat-label">Hearts You've Stolen</div>
          </div>
        </motion.div>

        <motion.div className="navigation-cards" variants={itemVariants}>
          <Link to="/our-story" className="nav-card">
            <div className="card-icon">📖</div>
            <h3>Our Story</h3>
            <p>The beautiful journey of how we found each other</p>
          </Link>
          
          <Link to="/memories" className="nav-card">
            <div className="card-icon">📸</div>
            <h3>Memories</h3>
            <p>Precious moments captured in time</p>
          </Link>
          
          <Link to="/love-letter" className="nav-card">
            <div className="card-icon">💌</div>
            <h3>Love Letter</h3>
            <p>Words from my heart to yours</p>
          </Link>
        </motion.div>

        <motion.div className="cta-section" variants={itemVariants}>
          <Link to="/surprise" className="btn-romantic pulse">
            Open Your Valentine's Surprise 🎁
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;