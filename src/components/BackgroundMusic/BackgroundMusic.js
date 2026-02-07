import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaMusic, FaHeart } from 'react-icons/fa';
import './BackgroundMusic.css';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showStartOverlay, setShowStartOverlay] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Check if user has previously allowed music
    const musicAllowed = localStorage.getItem('musicAllowed');
    
    if (musicAllowed === 'true') {
      // Try to autoplay if previously allowed
      const tryAutoplay = async () => {
        try {
          audio.volume = 0.7;
          await audio.play();
          setIsPlaying(true);
          setShowStartOverlay(false);
        } catch (err) {
          // If autoplay fails, show overlay
          setShowStartOverlay(true);
        }
      };
      tryAutoplay();
    }
  }, []);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0.7;
      await audio.play();
      setIsPlaying(true);
      setShowStartOverlay(false);
      // Remember user's choice
      localStorage.setItem('musicAllowed', 'true');
    } catch (err) {
      console.log('Could not play audio:', err);
    }
  };

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.log('Error toggling playback:', err);
    }
  };

  return (
    <>
      <div className="background-music">
        <audio
          ref={audioRef}
          src="/perfect.mp3"
          loop
          preload="auto"
        />
        
        <motion.button
          className={`music-control ${isPlaying ? 'playing' : 'paused'}`}
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          title={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          <div className="music-icon-wrapper">
            {isPlaying ? (
              <>
                <FaPause className="control-icon" />
                <FaMusic className="music-note animate" />
              </>
            ) : (
              <>
                <FaPlay className="control-icon" />
                <FaMusic className="music-note" />
              </>
            )}
          </div>
        </motion.button>
      </div>

      {/* Start Music Overlay */}
      <AnimatePresence>
        {showStartOverlay && (
          <motion.div
            className="music-start-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="start-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                className="heart-icon-large"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart />
              </motion.div>
              
              <h2>Welcome to Our Love Story</h2>
              <p>Click to start the experience with music</p>
              
              <motion.button
                className="start-button"
                onClick={startMusic}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaMusic /> Start with Music
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundMusic;