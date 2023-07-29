import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';
import PageLoader from './PageLoader';


const GridItem = ({ imageUrl, content, index }) => {
  const [imageRef, inViewImage] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contentRef, inViewContent] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const imageVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeIn' } },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } },
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
      {index%2===0 ? (<><motion.img
        src={imageUrl}
        alt="Image"
        ref={imageRef}
        initial="hidden"
        animate={inViewImage ? 'visible' : 'hidden'}
        variants={imageVariants}
        style={{ width: '50%', borderRadius: '8px', marginRight : 20  }}
      />
      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={inViewContent ? 'visible' : 'hidden'}
        variants={contentVariants}
        style={{ width: '50%', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', height : 150, boxShadow : '5px 5px 25px rgba(0,0,0,0.5)' }}
      >
        {content}
      </motion.div></>) : (<>
          <motion.div
          ref={contentRef}
          initial="hidden"
          animate={inViewContent ? 'visible' : 'hidden'}
          variants={contentVariants}
          style={{ width: '50%', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', height : 150, boxShadow : '5px 5px 25px rgba(0,0,0,0.5)' }}
        >
          {content}
        </motion.div>
        <motion.img
        src={imageUrl}
        alt="Image"
        ref={imageRef}
        initial="hidden"
        animate={inViewImage ? 'visible' : 'hidden'}
        variants={imageVariants}
        style={{ width: '50%', borderRadius: '8px', marginLeft : 20 }}
      /></>
      )}
    </div>
  );
};

const MyCollections = () => {
  const [disp,setDisp] = useState(false)
  const gridItems = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1591925323327-2b12e3f3fcc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      content: 'Content 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, totam, consequuntur nisi dolores incidunt, cumque ipsam culpa maxime harum libero tenetur. Reiciendis officia dolor ipsam ipsum! Suscipit quaerat optio error.',

    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1618933974351-e38629016464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1133&q=80',
      content: 'Content 2: Sed aliquet ex nec elit efficitur, id euismod nulla pharetra.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, totam, consequuntur nisi dolores incidunt, cumque ipsam culpa maxime harum libero tenetur. Reiciendis officia dolor ipsam ipsum! Suscipit quaerat optio error.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1627793741864-1a9ec3ef2ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1129&q=80',
      content: 'Content 3: Sed aliquet ex nec elit efficitur, id euismod nulla pharetra.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, totam, consequuntur nisi dolores incidunt, cumque ipsam culpa maxime harum libero tenetur. Reiciendis officia dolor ipsam ipsum! Suscipit quaerat optio error.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1613324765334-7f4a413b8bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      content: 'Content 4: Sed aliquet ex nec elit efficitur, id euismod nulla pharetra.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, totam, consequuntur nisi dolores incidunt, cumque ipsam culpa maxime harum libero tenetur. Reiciendis officia dolor ipsam ipsum! Suscipit quaerat optio error.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1607684442857-515a6017aaac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      content: 'Content 5: Sed aliquet ex nec elit efficitur, id euismod nulla pharetra.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, totam, consequuntur nisi dolores incidunt, cumque ipsam culpa maxime harum libero tenetur. Reiciendis officia dolor ipsam ipsum! Suscipit quaerat optio error.',
    },
    // Add more grid items as needed
  ];
useEffect(()=>{
  setTimeout(()=>{
    setDisp(true)
  },6000)
})
  return (
    disp ? <motion.div
     style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',backgroundColor : 'lightcyan' }}>
      <h1>Grids</h1>
      {gridItems.map((item, index) => (
       <Box key={index} sx={{
        m : 4
       }}> <GridItem  imageUrl={item.imageUrl} content={item.content} index={index}/> </Box>
      ))}
    </motion.div> : <PageLoader title={'Collections'}/>
  );
};

export default MyCollections;
