import React from 'react';
import { motion } from 'framer-motion';

const UnderConstructionPage = () => {
  // Animation variants for sliding up
  const imageVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };
const readingOwl = '/readingOwl.png'
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      <motion.img
        src = {readingOwl} // Replace with your image URL
        alt="Under Construction"
        style={{ width: '200px',  borderRadius: '50%' }}
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      />
      <h2
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#555',
          fontSize: '24px',
        }}
      >
        The page is under construction. Please check back later!
      </h2>
    </div>
  );
};

export default UnderConstructionPage;
