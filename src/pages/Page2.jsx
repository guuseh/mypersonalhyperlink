import Typewriter from "../components/Typewriter"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// @refresh reset

const Page2 = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false)
  const duration = 2;
  const pictures = [
    "/img/bag.png",
    "/img/balls.png",
    "/img/books.png",
    "/img/bracelet.png",
    "/img/cam.png",
    "/img/candle.png",
    "/img/ceramic.png",
    "/img/cross.png",
    "/img/fukt.png",
    "/img/ghost.png",
    "/img/greece.png",
    "/img/hondje.png",
    "/img/jager.png",
    "/img/keys.png",
    "/img/matches.png",
    "/img/mug.png",
    "/img/pic.png",
    "/img/polish.png",
    "/img/rings.png",
    "/img/sudoku.png",
    "/img/turtle.png",
  ]

  const personalsiteStyle = {
    overflow: "scroll",
    position: "relative",
  }
  const close = {
    width: "15px",
    height: "15px",
    // backgroundColor: "red",
    position: "absolute",
    top: "5px",
    left: "5px",
    borderRadius: "50%",
    border: "1px solid white",
    }

  const variants = {
    opac(i){
      return { opacity: 1,
      transition: {delay: i*0.3}}
    },
    pos(i){
      return{
        opacity: 0,
        translateX: -window.innerWidth,
        translateY: window.innerHeight,
        scale: 0,
        transition: {
          duration: 0.8,
        }
      }},
    move(){
      return{
        translateX: -window.innerWidth,
        translateY: window.innerHeight,
        scale: 0,
        transition: {
          duration: duration
        }
      }
    }
  }

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max-min + 1)) + min
  }

  let amount = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]


const handleNext = () => {
  setClicked(true);
  setTimeout(() => {
    navigate("/3")
  }, (duration+0.5)*1000)
}

return (
  <div className="websitewrapper">
    {amount.map((nr, i) => {
      return <motion.div key={i} id={i} className="pic" style={{
        height: 100,
        // width: "auto",
        border: "1px solid rgb(102,164,255)",
        padding: "10px",
        position: "absolute",
        // backgroundColor: pic.color[0],
        top: randomInt(20, window.innerHeight-150),
        left: randomInt(20, window.innerWidth-120),
      }}
      custom={i}
      variants={variants}
      initial={{
        opacity: 0}}
      animate={clicked? "pos": "opac"}
      // transition={{delay: i*0.3}}
        ><img id={nr} height="100" src={pictures[randomInt(0, pictures.length-1)]} onMouseOver={(e) => {e.currentTarget.src = pictures[randomInt(0, pictures.length-1)]}} /></motion.div>
    })}
  <motion.div className="websitecontainer" style={personalsiteStyle}
    animate={clicked? "move" : null }
    variants={variants}>
    <div style={close}></div><div style={{...close, left: "30px"}}></div><div style={{...close, left: "55px"}}></div>

    <Typewriter text="Building a personal website begins with the my: .myVariable, .myContainer, .myStyle, my home. My work in progress, my never-ending project, my ever-changing identity objectified / personified. My corner of the web, tucked away and rarely visited, but my own." delay={20}/>
    <motion.img className="click" src="/img/laptop.png" style={{position: "absolute", bottom: "30px", right: "45px", width: "100px"}} 
    initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}} onClick={(e) => {handleNext()}}/>
    <div className="corner">hyperlink//</div>
  </motion.div>
  </div>
)
  }
  
  export default Page2
  