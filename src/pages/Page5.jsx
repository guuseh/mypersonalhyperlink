import { useState, useEffect, useRef } from 'react'
import { motion, LayoutGroup } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Counter from "../components/Counter"
import { createPortal } from "react-dom";
import { MyWindowPortal } from "../components/MyWindowPortal"
// @refresh reset

const Page5 = () => {
    const [out, setOut] = useState(false)
    const navigate = useNavigate();
    // const [count, setCount] = useState(0);

    const iconstyle = {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "2px solid white",
        // backgroundColor: "rgb(0, 0, 255)",
        position: "absolute",
        top: window.innerHeight/2 - 100,
        right: window.innerWidth/2 - 100
    }
    const text1Span = {
        // maxWidth: "clamp(400px, 40vw, 80vw",
        textDecoration: "underline 0.9em white",
        textUnderlineOffset: "-0.7em",
        textDecorationSkipInk:"none",
        display: "block",
    }


    const container = {
        hidden() {
            return {x: -window.innerWidth-300}},
        show(){ 
            return {x: 0,
            transition: {
                duration: 0,
                staggerChildren: 0.5
            }}},
    }
    const span = {
        hidden(){ return {x: -window.innerWidth-300, scaleX: 2}},
        show() { return {x: 0, scaleX: 1,
            transition: {duration: 1.5,
                        type: "spring",
                        bounce: 0.3}}},
    }
   
    const handleClick = () => {
        setOut(true)
        setTimeout(() => {
            navigate("/6")
        }, 100)
    }

  return (
    <div className="websitewrapper">
    <motion.div className="icon-round" style={iconstyle}
        initial={{scale: 0.2}}>
    </motion.div>

    <motion.div style={{zIndex: 20}} variants={container} initial="hidden" animate={out? null : "show"}>
        <motion.span style={text1Span} variants={span}>Creating your online home is asking to be seen as you are </motion.span>
        <motion.span style={text1Span} variants={span}>you, not accommodating the prefab existence that social </motion.span>
        <motion.span style={text1Span} variants={span}>networking sites impose on us. A domain to control by </motion.span>
        <motion.span style={text1Span} variants={span}>yourself, to name, to find and <span className="link" onClick={handleClick}>link</span> and help find.</motion.span>
    </motion.div>
    </div>
  )
}

export default Page5