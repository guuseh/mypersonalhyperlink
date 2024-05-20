import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import MatterCanvas from "../components/MatterCanvas"
import Scene from "../components/Scene"


const Page11 = () => {
    const navigate = useNavigate()
    const [esc, setEsc] = useState(0)
    const [column, setColumn] = useState(6)
    const [row, setRow] = useState(6)
    const [index, setIndex] = useState(0)
    const [bye, setBye] = useState(false)
    const [move, setMove] = useState(false)

    const [count, setCount] = useState(0);
    
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

    let cells = document.querySelectorAll(".grid__item")

    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll(".grid__item").forEach((element,i) => {
                element.innerHTML = `U${randomInt(0, 192048)}`
                })
            }, 1)
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         document.getElementById("esc").remove()
    //     },2)
    //     setTimeout(() => {
    //         let index = randomInt(0, cells.length-1)
    //         cells[index].innerHTML = `<span class="link" id="esc">hoi</span>`
    //         // document.getElementById("esc").addEventListener("click", setEsc(esc+1))
    //     },3)
    // }, [])

    const setPos = () => {
        let c = randomInt(1,12)
        let r = randomInt(1,parseInt(8-(count/2)))
        setColumn(c)
        setRow(r)
        setIndex(index+1)
        setCount(count+1)
    }

    const goodbye = () => {
        setBye(true)
        // setCount(10)
        let times = 0;
        let interval = setInterval(() => {
            times++
            setCount(count => count+1)
            times > 25 && clearInterval(interval)
        }, 200)
        setTimeout(() => {
            navigate("/goodbye")
        }, 4500)
    }

    

  return (
    <div style={{backgroundColor: "black"}}>
    <Scene count={count}/>
    <motion.div className="websitewrapper"
        animate={bye&&{scale: 0}}>
        <motion.div style={iconstyle} className="icon-light"
            initial={{y: 0}}>
        </motion.div>
        <motion.div style={{position: "absolute", zIndex: "10"}}
            initial={{y: 0}}
           ><span style={textSpan}>The #id has transformed into the .class. Repetitive use of identical components, the only unique identifier being the <span className="link" onClick={() => setMove(true)}>UID</span> in the infinite database of user profiles. We are all created equal, we are all created the same.</span>
            </motion.div>
        <motion.div className="finalgrid" style={{zIndex: "50"}}
            initial={{y: -window.innerHeight}}
            animate={move&&{y: 0}}
            onAnimationComplete={()=> {setEsc(esc+1)}}>
        <div className="esc_grid__item" id="escape" style={{gridColumn: column, gridRow: row}} onMouseMove={index==15 ? null : setPos} onMouseEnter={index==15 ? null : setPos} onClick={goodbye}><span className="link">Escape</span></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        <div className="grid__item"></div>
        </motion.div>
    </motion.div>
    </div>
  )
}

export default Page11