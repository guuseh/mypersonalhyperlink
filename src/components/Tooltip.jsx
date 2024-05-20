import { useState } from 'react'

const Tooltip = () => {


    const style = {
        position: "absolute",
        top: -50,
        left: -50,
        color: "white",
        fontSize: "1rem",
        fontFamily: "clacon",
        pointerEvents: "none",
        zIndex: 200
    }
  return (
    <div id="cursor" style={style}>0<br/>0</div>
  )
}

export default Tooltip