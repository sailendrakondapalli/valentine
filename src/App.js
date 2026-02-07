import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Components
import Navigation from './components/Navigation/Navigation';
import SubtleFooter from './components/SubtleFooter/SubtleFooter';
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';
import Home from './pages/Home/Home';
import OurStory from './pages/OurStory/OurStory';
import MemoriesGallery from './pages/MemoriesGallery/MemoriesGallery';
import SpecialMoments from './pages/SpecialMoments/SpecialMoments';
import LoveLetter from './pages/LoveLetter/LoveLetter';
import WhyILoveYou from './pages/WhyILoveYou/WhyILoveYou';
import FinalSurprise from './pages/FinalSurprise/FinalSurprise';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <BackgroundMusic />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/memories" element={<MemoriesGallery />} />
            <Route path="/special-moments" element={<SpecialMoments />} />
            <Route path="/love-letter" element={<LoveLetter />} />
            <Route path="/why-i-love-you" element={<WhyILoveYou />} />
            <Route path="/surprise" element={<FinalSurprise />} />
          </Routes>
        </motion.div>
        <SubtleFooter />
      </div>
    </Router>
  );
}

export default App;