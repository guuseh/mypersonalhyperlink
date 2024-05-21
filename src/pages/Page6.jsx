import { useState, useEffect, useRef } from 'react'
import { motion, LayoutGroup } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Counter from "../components/Counter"
import { MyWindowPortal } from "../components/MyWindowPortal"
// @refresh reset

function Page6() {
    const navigate = useNavigate();
    const [x, setX] = useState(0)
    const [right, setRight] = useState(false)
    const [left, setLeft] = useState(false)
    const [zoom, setZoom] = useState(false)
    const [line, setLine] = useState(false)

    const iconstyle = {
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        border: "2px solid white",
        backgroundColor: "rgb(0, 0, 255)",
        position: "absolute",
        zIndex: 0
    }
    const textSpan = {
        width: "40vw",
        textDecoration: "underline 0.9em white",
        textUnderlineOffset: "-0.8em",
        textDecorationSkipInk:"none",
        display: "block",
        zIndex: 100,
    }
    const windows = [
        {init: 0, type: "plus", speed: 400}, 
        {init: 129, type: "plus", speed: 1000}, 
        {init: 936, type: "plus", speed: 500}, 
        {init: 2479, type: "plus", speed: 100}, 
        {init: 6082, type: "min", speed: 100}, 
        {init: 82937, type: "plus", speed: 20}, 
        {init: 500928, type: "min", speed: 20}, 
        {init: 133200, type: "plus", speed: 10}, 
        {init: 5039210, type: "min", speed: ""}, 
        {init: 50029, type: "plus", speed: 50}, 
    ]
    const width = window.innerWidth;
    const height = window.innerHeight;
    const posx = window.innerWidth/2 + 300
    const rows = [-5,-4,-3,-2,-1,0,1,2,3,4,5]
    const columns = [-2,-1,0,1,2]

    const variants = {
        zoom(finalx, finaly){
            return {
                scale: 0.2,
                x: posx * 0.2 * finalx,
                y: posx * 0.2 * finaly
            }
        }
    }

    onmousemove = function(e){
        let cursorstyle = e.target.className;
        const cursor = document.querySelector("#cursor")
            if(cursorstyle.includes("click") || cursorstyle.includes("link")){
                cursor.style.display = "none"
            } else {
                cursor.style.display = "block"
                cursor.style.left = `${e.pageX}px`
                cursor.style.top = `${e.pageY}px`
                cursor.innerHTML = `${e.pageX}<br/>${e.pageY}`
            }
        setX((window.innerWidth/2 - e.clientX)*0.6)
        if(e.clientX > (window.innerWidth-20))
            setRight(true)
        else if(e.clientX < 20)
            setLeft(true)
        else {setRight(false); setLeft(false)}
    }

    if(line){
        setTimeout(() => {
            navigate("/7")
        },5500)   
    }

  return ( 
    <div className="websitewrapper">

        { windows.map((window,i) => {
            return (
                <MyWindowPortal key={i} left={Math.random()*width} top={Math.random()*height} width={350} height={150}>
                    <Counter init={window.init} type={window.type} speed={window.speed}/>
                    <span style={{fontSize: "1rem"}}>Followers</span>
                </MyWindowPortal>
            )})}

    <MyWindowPortal left={width/2-200} top={height/2-150} width={400} height={300} text>
        <p>Hypertext connecting us, travelling through portals on the web to our digital homes, changed to hyperconnectivity: how many followers do <i>you</i> have?</p>
    </MyWindowPortal>

    <motion.div style={{zIndex: 20, x: x}} initial={{scale: 0.2}} 
            animate={ line ? { x: (posx-250)*0.2,y: height/2+100, transition: {duration: 3}}
            : zoom? {scale: 0.2, x: (posx-250)*0.2, transition: {duration: 5}}
            : {scale: 1, transition: { delay: 1,duration: 2, type: "spring", bounce: 0.5}}}>
        <span style={textSpan} id="textmove">
        (Not) all spaces are created equal. Networking sites present a cookie cutter template, where everyone can customise the appropriate amount to feel represented, but not so far to feel understood. Equal. The only content is the me. Everything about me, yet no matter the effort, networking sites yield anonymity, or convention. Personal sites invariably shimmer with identity, even among their bright and sterile networking neighbours.
        </span>
    </motion.div>

    <motion.div style={{position: "absolute", transformOrigin: "center", width: "100%", height: "100%"}}
        animate={zoom && {scale: 0.15, transition: {duration: 5}}}
        onAnimationComplete={()=>{setLine(true)}}>
            {rows.map((iconx, i) => {
                return <div key={i}>
                {
                columns.map((icony, j) => {
                    return (
                        <motion.div key={i+j} className={zoom ? "icon-round" : iconx == 1 || iconx == -1 ? "icon-round click" : "icon-round"} style={iconstyle}
                        onTap={() => {iconx == 1 || iconx == -1 ? setZoom(true) : null}}
                        variants={variants}
                        custom={[iconx, icony]}
                        initial={{x: (posx*iconx)+(width/2-250), y: posx*icony+height/2-250, scale: 0.2}}
                        animate={   line? {y: height/2-250, scale: 1, transition: {duration: Math.random()*4+2, type: "spring", bounce: 0.5}}
                                    : zoom? {scale: 1} 
                                    : left? {x: iconx == 0 ? null : (posx*iconx+width/2-250)+(150), scale: 1} 
                                    : right? {x: iconx == 0 ? null : (posx*iconx+width/2-250)-(150), scale: 1} 
                                    : {scale: 1, transition: {delay: 1, duration: 1, type: "spring", bounce: 0.5}}}>
                    </motion.div>
                    )})
                }</div>
            })}
    </motion.div>

    
    </div>
  )
}

export default Page6