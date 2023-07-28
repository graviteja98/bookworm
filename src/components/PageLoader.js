import React from "react";
import { motion } from "framer-motion";

const PageLoader = (props) => {
  const text = props.title;
  const letterSpacing = 8;

  const variants = {
    initial: {
      opacity: 0,
      x: -letterSpacing,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div style={{ width: "100%", height: 400, overflow: "hidden", display : 'flex', justifyContent : 'center', alignItems : 'center' }}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            letterSpacing: `${letterSpacing}px`,
            fontSize: "2rem",
            fontWeight : 600
          }}
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            delay: index * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {letter}
        </motion.span>
      ))}
      <motion.path
        d="M20 50 Q 40 10, 80 50 T 140 50"
        style={{
          fill: "none",
          stroke: "transparent",
        }}
      />
    </motion.div>
  );
};

export default PageLoader;
