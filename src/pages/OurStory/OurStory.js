import React from 'react';
import { motion } from 'framer-motion';
import { ourStoryData } from '../../data/content';
import './OurStory.css';

const OurStory = () => {
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
    <div className="our-story-page">
      <motion.div 
        className="story-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="story-header" variants={itemVariants}>
          <h1 className="page-title">Our Beautiful Story</h1>
          <p className="subtitle">Every love story is beautiful, but ours is my favorite</p>
        </motion.div>

        <div className="timeline">
          {ourStoryData.map((event, index) => (
            <motion.div
              key={event.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-content">
                <div className="timeline-marker">
                  <span className="timeline-emoji">{event.emoji}</span>
                </div>
                
                <div className="timeline-card">
                  <div className="timeline-date">{event.date}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                  <div className="timeline-details">{event.details}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="story-footer" variants={itemVariants}>
          <div className="love-quote">
            <motion.p
              animate={{ 
                color: ['#d63384', '#ff6b9d', '#ff8fab', '#d63384']
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              "And they lived happily ever after... but this is just the beginning of our story."
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurStory;