import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import {  useScramble } from "use-scramble"
import { useNavigate } from "react-router-dom"
import { map } from "../assets/map.js"
import Scrambler from "../components/Scrambler"
import RandomLetter from "../components/RandomLetter"
// @refresh reset

const Page9 = () => {
    const navigate = useNavigate()
    const [move, setMove] = useState(false);
    const [text, setText] = useState("We don’t anymore understand the construction of this digital space we are afforded. The architecture of our digital bodies is hidden underneath a thick veil of algorithms and obfuscated code. We live in ignorance of the frameworks that uphold our lives. The web as it once was translated unreadable programming languages to understandable source code and visible webpages. Now preprocessors generate unreadable code from understandable programming, rejecting repurposing and reviewing.")

    const codetext = {
        position: "absolute",
        width: "45.1vw",
        fontFamily: "clacon",
        color: "white",
        }
        const { ref }  = useScramble({
            text: text,
            speed: 0.7,
            overflow: true,
            tick: 4,
            step: 6,
            overdrive: false,
            scramble: 30,
        })
    const handleNext = () => {
        setMove(true)
        setTimeout(() => {
            setText("Being online now means presenting ourselves, marketing ourselves. Conforming to the space that was carved out for us, and trying to yield the most attention. We consume the meticulously created profiles of our peers, scrolling through endless mirrors of ourselves, or rather what we are supposed to be. The longer you scroll, the more revenue you create. Maximise your value.")
        }, 1000)
    }
    
  return (
    <div className="websitewrapper">
        <motion.div style={{...codetext, display: move? "none" : "block"}}
        initial={{y: 0}}
        >
            <Scrambler classs="paragraph" text="We don’t anymore understand the construction of this digital space we are afforded. The architecture of our digital bodies is hidden underneath a thick veil of algorithms and obfuscated code. We live in ignorance of the frameworks that uphold our lives. The web as it once was translated unreadable programming languages to understandable source code and visible webpages. Now preprocessors generate unreadable code from understandable programming, rejecting repurposing and reviewing." />
            <motion.div className="click" style={{height: "0"}}
                initial={{scaleY: 0}}
                animate={{height: "auto", scaleY:1,  transition: {delay: 2}}}
                onTap={handleNext}
                >
                    <motion.span
                        // style={move ? {display: "none"}: {display: "inline"}}
                        className="paragraph"
                        onHoverStart={(e) => {e.target.innerHTML = ">"}}
                        onHoverEnd={(e) => {e.target.innerHTML = "#"}}>#</motion.span>
                    <motion.span
                        className="paragraph"
                        onHoverStart={(e) => {e.target.innerHTML = ">"}}
                        onHoverEnd={(e) => {e.target.innerHTML = "#"}}>#</motion.span>
                    <motion.span
                        className="paragraph"
                        onHoverStart={(e) => {e.target.innerHTML = ">"}}
                        onHoverEnd={(e) => {e.target.innerHTML = "#"}}>#</motion.span>
            </motion.div>
        </motion.div>
        
        <motion.div style={{...codetext, width: "45vw", display: move? "block": "none"}}
            initial={{x: 0, y: 0}}>
            <p ref={ref}/>
            <motion.div  className="click" style={{height: "0"}}
                initial={{scaleY: 0}}
                animate={move&& {height: "auto", scaleY:1,  transition: {delay: 2}}}
                onTap={() => {navigate("/10")}}
                >
                    <motion.span
                        // style={move ? {display: "none"}: {display: "inline"}}
                        className="paragraph"
                        onHoverStart={(e) => {e.target.innerHTML = ">"}}
                        onHoverEnd={(e) => {e.target.innerHTML = "#"}}>#</motion.span>
                    <motion.span
                        className="paragraph"
                        onHoverStart={(e) => {e.target.innerHTML = ">"}}
                        onHoverEnd={(e) => {e.target.innerHTML = "#"}}>#</motion.span>
                    <motion.span
                        className="paragraph"
                        onHoverStart={(e) => {e.target.innerHTML = ">"}}
                        onHoverEnd={(e) => {e.target.innerHTML = "#"}}>#</motion.span>
                </motion.div>
        </motion.div>
        
    </div>
  )
}

export default Page9