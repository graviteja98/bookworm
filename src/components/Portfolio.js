import React, { useEffect, useRef } from 'react';
import { motion,  useScroll, useTransform } from 'framer-motion';

const Portfolio = () => {
  const gridRef = useRef(null);
  const gridRows = useRef([]);

  useEffect(() => {
    const rows = Array.from(gridRef.current.children);
    gridRows.current = rows;
  }, []);
  const elementRef = useRef(null);
  const [elementY, setElementY] = React.useState(0);

  useEffect(() => {
    // Function to get the Y location of the element
    const getElementY = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;
        const y = rect.top + scrollTop;
        setElementY(y);
      }
    };    getElementY();
    window.addEventListener('scroll', getElementY);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', getElementY);
    };
  }, []);
  const rowVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeIn' } },
  };
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  console.log(y);
  console.log(elementY)
  return (
    <div  ref={elementRef} style={{ backgroundColor: '#f9f9f9', padding: '50px' }}>
      <h1>Portfolio</h1>
      <div
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',

          transformOrigin: '0 0',
          marginTop: '40px',
        }}
      >
        {/* Row 1 */}
        {/* <motion.div
          style={{ gridColumn: '1 / span 2' }}
          initial="hidden"
          animate={ 'visible' }
          variants={rowVariants}
        >
          <img src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80ages.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px' }}>Description of Image 1.</p>
        </motion.div> */}
        <motion.div
          style={{ gridColumn: '3 / span 2' }}
          initial="hidden"
          animate={y.current >= '0%' ? 'visible' : 'hidden'}
          variants={rowVariants}
        >
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px' }}>Description of Image 2.</p>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          style={{ gridColumn: '2 / span 2' }}
          initial="hidden"
          animate={y.current >= '20%' ? 'visible' : 'hidden'}
          variants={rowVariants}
        >
          <img src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px' }}>Description of Image 3.</p>
        </motion.div>
        <motion.div
          style={{ gridColumn: '4 / span 2' }}
          initial="hidden"
          animate={y.current >= '20%' ? 'visible' : 'hidden'}
          transition={{
            delay : 0.20
          }}
          variants={rowVariants}
        >
          <img src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px' }}>Description of Image 4.</p>
        </motion.div>

        {/* Row 3 */}
        <motion.div
          style={{ gridColumn: '1 / span 2' }}
          initial="hidden"
          animate={y.current >= '45%' ? 'visible' : 'hidden'}
          variants={rowVariants}
        >
          <img src="https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px' }}>Description of Image 5.</p>
        </motion.div>
        <motion.div
          style={{ gridColumn: '3 / span 2' }}
          initial="hidden"
          animate={y.current >= '45%' ? 'visible' : 'hidden'}
          variants={rowVariants}
        >
          <img src="https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80" alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          <p style={{ marginTop: '10px' }}>Description of Image 6.</p>
        </motion.div>

        {/* Add more rows and images as needed */}
      </div>
    </div>
  );
};

export default Portfolio;
