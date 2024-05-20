import { useState } from 'react'
import { motion, LayoutGroup } from "framer-motion"
import { useNavigate } from "react-router-dom"
// @refresh reset

const Page3 = () => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false)
    const [drift, setDrift] = useState(false)
    const [complete, setComplete] = useState(false)
    var boxes = [1,2,3,4,5,6,7,8]
    var duration = 2

    const page3style = {
        flexDirection: "column",
        alignItems: "start",
        gap: "2rem",
    }
    const textSpan = {
        maxWidth: "clamp(400px, 40vw, 80vw",
        textDecoration: "underline 1em white",
        textUnderlineOffset: "-0.8em",
        textDecorationSkipInk:"none",
        marginLeft:"5rem",
        display: complete? "none" : "block",
        lineHeight: "1.7rem"
    }
    const framewrapper = {
        width: "90vw",
        marginLeft: "5rem",
        display: "flex",
        flexDirection: "row",
        gap: complete? "0" : "1rem",
        alignContent: "stretch",
        justifyContent: complete? "center" : "flex-start",
    }
    const websitecontainer = {
        // backgroundColor: "rgb(0, 0, 255)",
        width: "40vw",
        height: "40vh",
        padding: "50px",
        display: "flex",
        alignItems: "center",
        border: "2px solid white",
        position: "relative"
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
        start(){
            return {
                x: -window.innerWidth,
                y: window.innerHeight,
                scale: 0
        }},
        moveIn(){
            return {
                x: 0,
                y: 0,
                scale: 1,
                transition: { 
                    type: "spring",
                    duration: 2,
                    damping: 10,
                    stiffness: 100,
                    restDelta: 0.01}
        }},
        drift(random){
            return {
                y: -1000,
                x: -1000/(random),
                rotate: -100/random,
                scale: 0.1,
                transition: {
                    duration: duration
                }
            }}}

    const handleClick = () => {
        setClicked(true);
    }
    const handleDrift = () => {
        setDrift(true)
        setTimeout(() => {
            document.getElementsByClassName("webcontainer3").style.display = "none"
        }, duration*1000)
    }
    const handleNext = () => {
        setComplete(true)
        setTimeout(() => {
            navigate("/4")
        }, 1500)
    }

  return (
    <div className="websitewrapper" style={page3style}>

        <motion.span style={textSpan}
            initial={{y: -window.innerHeight/4}}
            animate={drift? {y: -window.innerHeight/2, transition:{duration: 1}} : {y:0}}
        
            >Find me by my <span className="link" onClick={handleClick}>name</span>, a piece of my mind taking refuge in a cell of a data centre, surrounded by the hive mind of the www, occupying a piece of land with the physical infrastructure of digital space: cables, data centres, what is keeping the cloud from drifting into space.
        </motion.span>

        <LayoutGroup>
            <motion.div style={framewrapper}>

            <motion.div layout style={websitecontainer} 
                variants={variants}
                initial={{
                    x: -window.innerWidth/2,
                    y: window.innerHeight/2,
                    scale: 0 }}
                animate={clicked? "moveIn" : null}
            >
                    <div layout style={close}></div><div layout style={{...close, left: "30px"}}></div><div layout style={{...close, left: "55px"}}></div>
                    <div layout className="corner">hyperlink//</div>

            </motion.div>
            
            {boxes.map((box, i) => {
                const [show, setShow] = useState(false)
                clicked&&
                setTimeout(() => {
                    setShow(true)
                 } , 2000+i*(1000-(i*30)))
                 if(box == 8){
                    return <motion.div layout className="webcontainer3-8" 
                    variants={variants}
                    animate={drift? "drift" : null}
                    custom={(i+1)}
                    style={{
                        width: complete? "0" : show ? "30vw" : "0",
                        border: show ? "2px solid white" : "none",
                        opacity: show ? "1" : "0"}}><span style={{backgroundColor: "white", width: "100%", textAlign: "center", lineHeight: "2rem"}} className="link" onClick={handleDrift}> drift </span>
                        <div layout style={close}></div>
                        <div layout className="corner">//</div></motion.div>
                 } else {
                    return <motion.div layout className="webcontainer3" 
                    variants={variants}
                    animate={drift? "drift" : null}
                    custom={(i+1)}
                    onAnimationComplete={handleNext}
                    style={{
                    width: complete? "0" : show ? "30vw" : "0",
                    border: show ? "2px solid white" : "none",
                    display: complete ? "none" : "block",
                    opacity: show ? "1" : "0"}}>
                        <div layout style={close}></div>
                        <div layout className="corner">//</div>
                    </motion.div>}
            })}

            </motion.div>
        </LayoutGroup>
    </div>
  )
}

export default Page3