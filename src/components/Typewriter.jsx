import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// @refresh reset

const Typewriter = ({ text, delay, hover }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textArray, setTextArray] = useState([]);
  const navigate = useNavigate();
  const [clicked, setClicked ] = useState(false);
  const duration = 4;

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setTextArray([...textArray, text[currentIndex]])
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  const variants = {
    position(random){
      return{      
      translateX: random * (400) - 200,
      translateY: random * (1000) - 2000,
      transition:{
              translateY: {
                delay: 0.1,
                duration: duration,
                ease: "easeIn"},
              translateX: {
                ease: "easeIn",
                type: "spring",
                duration: duration,
                damping: 10,
                stiffness: 50,
                restDelta: 0.001}
    }}}}

  const handleHover = () => {
    if(currentIndex==text.length) {
      setClicked(true)
      setTimeout(() => {
        navigate("/2")
      }, (duration+0.5)*1000)
    }
  }

  if(hover){
  return <span id="text" onMouseEnter={handleHover}>
    {textArray.map((letter, i) => {
    return <motion.span key={i} className="letter" 
                animate={clicked? "position" : null} 
                variants={variants} 
                custom={Math.random()}
          >{letter}</motion.span>

    })}
  </span>
  } else{
    return <span id="text">{textArray}</span>
  }

};

export default Typewriter;