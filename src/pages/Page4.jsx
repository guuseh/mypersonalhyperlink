import { useState } from 'react'
import { motion, LayoutGroup } from "framer-motion"
import { useNavigate } from "react-router-dom"
// @refresh reset

const Page4 = () => {
    const [start, setStart] = useState(false)
    const navigate = useNavigate();

    var icons = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

    const page3style = {
        flexDirection: "column",
        alignItems: "start",
        gap: "2rem",
    }
    const framewrapper = {
        width: "90vw",
        marginLeft: "5rem",
        display: "flex",
        flexDirection: "row",
        gap: "0",
        alignContent: "stretch",
        justifyContent: "center",
    }
    const websitecontainer = {
        // backgroundColor: "#FFF",
        width: "40vw",
        height: "40vh",
        padding: "50px",
        display: "flex",
        alignItems: "center",
        border: "2px solid white",
        overflow: "hidden",
        position: "relative",
        color: "white"
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
    const iconstyle = {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "2px solid white",
        backgroundColor: "rgb(0, 0, 255)",
        position: "absolute",
        top: window.innerHeight/2 - 100,
        right: window.innerWidth/2 - 100
    }

    const handleNext = () => {
        setTimeout(() => {
            navigate("/5")
        }, 1000)
    }

  return (
    <div className="websitewrapper" style={page3style}>
        <motion.div style={framewrapper}
            animate={start? {scale: 0, transition: {duration: 7}} : null}>
        <motion.div layout style={websitecontainer}>
        <div className="click" style={{...close, backgroundColor: "red"}} onClick={()=>{setStart(true)}}></div><div style={{...close, left: "30px"}}></div><div style={{...close, left: "55px"}}></div>
        <motion.span
            initial={{y: window.innerHeight/2}}
            animate={{y: 0}}
            transition={{
                duration: 2,
                type: "spring",
                damping: 5,
                stiffness: 30,
                restDelta: 0.001
            }}>
            In our digital world, owned by the few and populated by standardised and bastardised online profiles, inhabiting a small corner by yourself is an act of resistance. A continuation of decades of liberation from centralised corporations trying to take control of your corpus. Taking over online territory and making it one's own was a rebellious response to the protocols of the internet from the moment of it’s widespread adoption. Even the father of the internet looked down his nose at digital homes.
        </motion.span>
        <div className="corner">hyperlink//</div>
        </motion.div>
        </motion.div>

        {icons.map((icon, i)=> {
            
            var numx = ((Math.ceil(Math.random())* Math.round(Math.random()) ? 1 : -1) * (window.innerWidth/2 + 600 + (Math.random()*8000)))
            var numy = (Math.random() - 0) * ((window.innerHeight+(Math.random()*8000)) - (-(window.innerHeight+(Math.random()*8000)))) / (1 - 0) + (-(window.innerHeight+(Math.random()*8000)))
            return <motion.div className="icon-round" key={i} style={iconstyle}
            initial={{x: numx, y: numy, scale: 2}}
            animate={start? {x: 0, y: 0, scale: 0.2, transition: {duration: 7}} : null}></motion.div>
        })}
        {icons.map((icon, i)=> {
            var numy = ((Math.ceil(Math.random())* Math.round(Math.random()) ? 1 : -1) * (window.innerHeight/2 + 600 + (Math.random()*8000)))
            var numx = (Math.random() - 0) * ((window.innerWidth+(Math.random()*8000)) - (-(window.innerWidth+(Math.random()*8000)))) / (1 - 0) + (-(window.innerWidth+(Math.random()*8000)))
            return <motion.div className="icon-round" key={i} style={iconstyle}
            initial={{x: numx, y: numy, scale: 2}}
            animate={start? {x: 0, y: 0, scale: 0.2, transition: {duration: 7}} : null}
            onAnimationComplete={handleNext}></motion.div>
            
        })}
        
    </div>
  )
}

export default Page4