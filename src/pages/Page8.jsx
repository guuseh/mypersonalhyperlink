import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { map } from "../assets/map.js"
// @refresh reset

function Page8() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const cubewrapper = {
    width: "45vw",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    // gridAutoRows: "auto",
    columnGap: "10px",
  }
  const cubestyle = {
    height: "50vh",
    backgroundColor: "black",
    border: "2px solid white",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // gap: "1rem",
    alignItems: "center",
    color: "white",
    padding: "3rem",
    boxSizing: "border-box"
  }
  const smallcubestyle = {
    backgroundColor: "black",
    border: "2px solid white",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    // padding: "3rem",
    boxSizing: "border-box",
    fontSize: "10rem",
    lineHeight: "8rem",
  }
  const codetext = {
    position: "absolute",
    width: "45vw",
    fontFamily: "clacon",
    color: "white"
  }
  return (
    <div className="websitewrapper">
      <motion.div initial={{y: 35}} style={cubewrapper} animate={{y: count == 0 ? null : count % 2 == 0 || count == 11 ?  -(count-1)*80: -count*80}}>
      
      {/* 0 */}
      <div style={cubestyle}>
        <motion.span>Our digital presence is homeless. We rent a /room in a hotel we can’t decorate. Our memories and experiences reside in the cloud. We reside in the cloud. We expect to shape the cloud but in reality the cloud shapes us. The cloud is optimised. Everything exists according to rules and regulations. Moving out, transforming into drops of rain, of something, and creating novel existence is hardly an option.</motion.span>
        <motion.span className="click" style={{fontSize: "5rem", height: "0", lineHeight: "4rem"}}
          initial={{y:10, scale: 0}}
          animate={count == 0 ? {height: "auto", scale: 1, transition: {delay: 2}} : {height: "0", scale: "0"}}
          onTap={() => {setCount(1)}}
          >+</motion.span>
      </div>

      {/* 1 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
        initial={{ scale: 0}}
        animate={count == 1 && { height: "45vh", scale: 1, transition: {type: "linear", duration: 0.1} }}
        >
          <motion.span className="click"
          initial={{scale: 1}}
          animate={count !== 1 ? {scale: 0} : {scale: 1}}
          onTap={() => setCount(2)}
          >+</motion.span>
      </motion.div>

      {/* 2 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
        initial={{ scale: 0}}
        animate={count == 2 && { height: "45vh", scale: 1, transition: {type: "linear", duration: 0.1} }}
        >
          <motion.span className="click"
          initial={{scale: 1}}
          animate={count !== 2 ? {scale: 0} : {scale: 1}}
          onTap={() => setCount(3)}
          >+</motion.span>
      </motion.div>
      
      {/* 3 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
          initial={{ scale: 0}}
          animate={count == 3 && { height: "45vh", scale: 1, transition: {type: "linear", duration: 0.1} }}
          >
            <motion.span className="click"
            initial={{scale: 1}}
            animate={count !== 3 ? {scale: 0} : {scale: 1}}
            onTap={() => setCount(4)}
            >+</motion.span>
      </motion.div>

      {/* 4 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
          initial={{ scale: 0}}
          animate={count == 4 && { height: "45vh", scale: 1, transition: {type: "linear", duration: 0.1} }}
          >
            <motion.span className="click"
            initial={{scale: 1}}
            animate={count !== 4 ? {scale: 0} : {scale: 1}}
            onTap={() => setCount(5)}
            >+</motion.span>
      </motion.div>

      {/* 5 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
          initial={{ scale: 0}}
          animate={count == 5 && { height: "45vh", scale: 1, transition: {type: "linear", duration: 0.1} }}
          >
            <motion.span className="click"
            initial={{scale: 1}}
            animate={count !== 5 ? {scale: 0} : {scale: 1}}
            onTap={() => setCount(6)}
            >+</motion.span>
      </motion.div>

      {/* 6 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
          initial={{ scale: 0}}
          animate={count == 6 && { height: "45vh", scale: 1, transition: {type: "linear", duration: 0.1} }}
          >
            <motion.span className="click"
            initial={{scale: 1}}
            animate={count !== 6 ? {scale: 0} : {scale: 1}}
            onTap={() => setCount(7)}
            >+</motion.span>
      </motion.div>

      {/* 7 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
          initial={{ scale: 0}}
          animate={count == 11 ? {translateX: map(Math.random(), 0, 1, -window.innerWidth, 0), translateY: map(Math.random(), 0, 1, -window.innerHeight/1.5, -window.innerHeight), height: "50vh", scale: 0.9, rotate: "-25deg", transition: {duration: 5}} 
                  :count == 7 && { height: "45vh", scale: 1, transition: {ease: [0.4, 0, 1, 1], duration: 0.1} }}
          >
            <motion.span className="click"
            initial={{scale: 1}}
            animate={count !== 7 ? {scale: 0} : {scale: 1}}
            onTap={() => setCount(8)}
            >+</motion.span>
      </motion.div>

      {/* 8 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
          initial={{ scale: 0}}
          animate={count == 11 ? {translateX: map(Math.random(), 0, 1, 0, window.innerWidth), translateY: map(Math.random(), 0, 1, -window.innerHeight, -window.innerHeight*2), height: "50vh", scale: 0.9, rotate: "25deg",transition: {duration: 5}} 
                  :count == 8 && { height: "45vh", scale: 1, transition: {ease: [0.4, 0, 1, 1], duration: 0.1} }}
          >
            <motion.span className="click"
            initial={{scale: 1}}
            animate={count !== 8 ? {scale: 0} : {scale: 1}}
            onTap={() => setCount(9)}
            >+</motion.span>
      </motion.div>

      {/* 9 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
          initial={{ scale: 0}}
          animate={count == 11 ? {translateX: map(Math.random(), 0, 1, -window.innerWidth, 0), translateY: map(Math.random(), 0, 1, -window.innerHeight, -window.innerHeight*2), height: "50vh", scale: 0.9, rotate: "-25deg", transition: {duration: 5}} 
                  :count == 9 && { height: "45vh", scale: 1, transition: {ease: [0.4, 0, 1, 1], duration: 0.1} }}
          >
            <motion.span className="click"
            initial={{scale: 1}}
            animate={count !== 9 ? {scale: 0} : {scale: 1}}
            onTap={() => setCount(10)}
            >+</motion.span>
      </motion.div>

      {/* 10 */}
      <motion.div style={{...smallcubestyle, height: "0"}}
          initial={{ scale: 0}}
          animate={count == 11 ? {translateX: map(Math.random(), 0, 1, 0, window.innerWidth), translateY: map(Math.random(), 0, 1, -window.innerHeight, -window.innerHeight*2), height: "50vh", scale: 0.9, rotate: "25deg", transition: {duration: 5}} 
                  :count == 10 && { height: "45vh", scale: 1, transition: {ease: [0.4, 0, 1, 1], duration: 0.1} }}
          >
            <motion.span className="click"
            initial={{scale: 1}}
            animate={count !== 10 ? {scale: 0} : {scale: 1}}
            onTap={() => setCount(11)}
            >&gt;&gt;&gt;</motion.span>
      </motion.div>
      </motion.div>

      <motion.div style={codetext}
        initial={{y: window.innerHeight}}
        animate={count == 11 && {y: 0, transition: {duration: 5, type:"spring", bounce: "0.3"}}}
        onAnimationComplete={() => navigate("/9")}>
        <motion.p>We don’t anymore understand the construction of this digital space we are afforded. The architecture of our digital bodies is hidden underneath a thick veil of algorithms and obfuscated code. We live in ignorance of the frameworks that uphold our lives. The web as it once was translated unreadable programming languages to understandable source code and visible webpages. Now preprocessors generate unreadable code from understandable programming, rejecting repurposing and reviewing.</motion.p>
      </motion.div>
    </div>
  )
}

export default Page8