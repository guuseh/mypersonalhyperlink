import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Page10 = () => {
    const navigate = useNavigate()
    // const [pictures, setPictures] = useState([])

    const codetext = {
        position: "absolute",
        width: "45vw",
        fontFamily: "clacon",
        color: "white",
        }
    const iconstyle = {
        width: "90vh",
        height: "90vh",
        // borderRadius: "50%",
        backgroundColor: "rgb(0, 0, 255)",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
        const textSpan = {
            width: "50vw",
            textDecoration: "underline 1em white",
            textUnderlineOffset: "-0.8em",
            textDecorationSkipInk:"none",
            display: "block",
            zIndex: 100,
            lineHeight: "1.7rem"
        }

        const randomInt = (min, max) => {
            return Math.floor(Math.random() * (max-min + 1)) + min
        }
        let x = (window.innerWidth/5)
        let y = window.innerWidth/5


        const [pictures, setPictures] = useState([
            {src: "./img/sqr/bag.png", x: 0*x+10, y: 0},
            {src: "./img/sqr/balls.png", x: x+10, y: 0},
            {src: "", x: 3*x+10, y: 0},
            {src: "./img/sqr/books.png", x: x+10, y: y},
            {src: "./img/sqr/bracelet.png", x: 2*x+10, y: y},
            {src: "", x: 4*x+10, y: y},
            {src: "./img/sqr/cam.png", x: 0*x+10, y: y*2},
            {src: "./img/sqr/candle.png", x: 2*x+10, y: y*2},
            {src: "./img/sqr/ceramic.png", x: 3*x+10, y: y*2},
            {src: "./img/sqr/cross.png", x: x+10, y: y*3},
            {src: "", x: 3*x+10, y: y*3},
            {src: "./img/sqr/fukt.png", x: 4*x+10, y: y*3},
            {src: "./img/sqr/ghost.png", x: x+10, y: y*4},
            {src: "", x: 2*x+10, y: y*4},
            {src: "", x: 4*x+10, y: y*4},
            {src: "./img/sqr/greece.png", x: 0*x+10, y: y*5},
            {src: "./img/sqr/hondje.png", x: 3*x+10, y: y*5},
            {src: "./img/sqr/jager.png", x: 4*x+10, y: y*5},
            {src: "", x: 0*x+10, y: y*6},
            {src: "./img/sqr/keys.png", x: 2*x+10, y: y*6},
            {src: "./img/sqr/matches.png", x: 4*x+10, y: y*6},
            {src: "./img/sqr/mug.png", x: x+10, y: y*7},
            {src: "./img/sqr/pic.png", x: 2*x+10, y: y*7},
            {src: "", x: 0*x+10, y: y*8},
            {src: "./img/sqr/polish.png", x: x+10, y: y*8},
            {src: "./img/sqr/rings.png", x: 2*x+10, y: y*8},
            {src: "./img/sqr/sudoku.png", x: 4*x+10, y: y*8},
            {src: "", x: x+10, y: y*9},
            {src: "./img/sqr/turtle.png", x: 3*x+10, y: y*9},
            {src: "", x: 0*x+10, y: y*3},
          ])

    

 
        
  return (
    <div className="websitewrapper">
        <motion.div style={codetext}
            animate={{y: -window.innerHeight, transition: {duration: 5}}}>
        Being online now means presenting ourselves, marketing ourselves. Conforming to the space that was carved out for us, and trying to yield the most attention. We consume the meticulously created profiles of our peers, scrolling through endless mirrors of ourselves, or rather what we are supposed to be. The longer you scroll, the more revenue you create. Maximise your value.
        <br/>
        ###
        </motion.div>

        <motion.div style={iconstyle} className="icon-light"
            initial={{y: window.innerHeight}}
            animate={{y: 0, transition: {duration: 5}}}>
        </motion.div>
        
       <motion.div 
       style={{position: "relative", width:"100vw", height: "100vh"}}
       initial={{y: window.innerHeight*2}}
       animate={{y: -window.innerHeight*5, transition: {duration: 35}}}
       >
        {pictures.map((pic,i) => {
            let random = Math.random()
            return <motion.div key={i} className={pic.src == "" ? "crossout" : ""} style={{
                height: window.innerWidth/5-20,
                width: window.innerWidth/5-20,
                border: "2px solid rgb(102,164,255)",
                position: "absolute",
                // backgroundColor: pic.color[0],
                // top: randomInt(0,9) * y,
                // left: randomInt(0,5)* x+10
                top: pic.y,
                left:pic.x
                }}>
                    <img src={pic.src} style={{height: window.innerWidth/5-20}}/>
            </motion.div>
        })}
       
       </motion.div>
       <motion.div style={{position: "absolute"}}
            initial={{y: window.innerHeight}}
            animate={{y: 0, transition: {delay: 22, duration: 5}}}
            onAnimationComplete={()=> {navigate("/11")}}
            >
                <span style={textSpan}>The #id has transformed into the .class. Repetitive use of identical components, the only unique identifier being the <span className="link">UID</span> in the infinite database of user profiles. We are all created equal, we are all created the same.</span>
            </motion.div>
        
    </div>
  )
}

export default Page10