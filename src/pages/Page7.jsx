import { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue } from "framer-motion"
import { useNavigate } from "react-router-dom"
// @refresh reset

function Page7() {
    const navigate = useNavigate();
    const [move, setMove] = useState(false);

    const iconstyle = {
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        border: "2px solid white",
        backgroundColor: "rgb(0, 0, 255)",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "200px",
        color: "white",
        // top: window.innerHeight/2 - 250,
        // right: window.innerWidth/2 - 250,
        zIndex: 0
    }
    const textdiv = {
        position: "absolute"
    }
    const textSpan = {
        width: "40vw",
        textDecoration: "underline 0.9em white",
        textUnderlineOffset: "-0.8em",
        textDecorationSkipInk:"none",
        display: "block",
        zIndex: 100,
    }
    const cubestyle = {
        width: "45vw",
        height: "50vh",
        backgroundColor: "black",
        border: "2px solid white",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        padding: "3rem",
        boxSizing: "border-box"
        // top: window.innerHeight/2*0.35,
        // left: window.innerWidth/2*0.5,
    }

    const rows = [-5,-4,-3,-2,-1,0,1,2,3,4,5]
    const columns = [-2,-1,0,1,2]

    return ( 
        <div>
        <div className="websitewrapper">

            <motion.div 
                style={textdiv}
                initial={{y: window.innerHeight/1.5, x: -window.innerWidth/2+500}}
                animate={move? {y: window.innerHeight/4, x: -window.innerWidth/2-300, transition: {ease: [0.7, 0, 1, 1], duration: 4}} : {y: window.innerHeight/4, transition: {duration: 2, type:"spring", bounce: "0.5"}}}>
                <span style={textSpan}>The third space is online. Where do we go when we want to go anywhere? But this third space is steadily privatised, enforcing rules and restrictions on its use. We rely on for-profit platforms to maintain our online presence, occupying our designated humble container. Where is the library, the corner cafe, the rooftop garden of the digital space?</span>
            </motion.div>

            <motion.div style={{position: "absolute", transformOrigin: "center", width: "100%", height: "100%", scale: "0.15"}}
                animate={move? {x: -window.innerWidth/3, transition: {delay: 2, duration: 4, ease: [0.5, 0, 1, 1]}} : null}>
            {rows.map((row, i) => {
                return <div key={i}>
                    {columns.map((column, j) => {
                        return(   
                        <motion.div className="icon-round" key={i+j} style={{...iconstyle, transformOrigin: "center"}}
                            initial={{y: (window.innerHeight/2-250), x: (((window.innerWidth/2+300)*row) +(window.innerWidth/2-250))}}
                            animate={move? {x: (((window.innerWidth/2+100)*5) +(window.innerWidth/2-250)), transition: {ease: [0.7, 0, 1, 1], duration: Math.random()*5+2}} : null}
                        ><motion.span key={j+i}
                            className="click"
                            onTap={()=> {setMove(true)}}
                            initial={{opacity: 0}}
                            >xxx</motion.span>
                        </motion.div>
                        )
                    })}
                </div>
            })}
            </motion.div>

            <motion.div style={cubestyle}
                initial={{x: window.innerWidth}}
                animate={move? {x: 0, transition: {duration: 7}} : null}
                onAnimationComplete={() => navigate("/8")}
                >
            Our digital presence is homeless. We rent a /room in a hotel we can’t decorate. Our memories and experiences reside in the cloud. We reside in the cloud. We expect to shape the cloud but in reality the cloud shapes us. The cloud is optimised. Everything exists according to rules and regulations. Moving out, transforming into drops of rain, of something, and creating novel existence is hardly an option.
            </motion.div>
        </div>
            
        </div>
  )
}

export default Page7