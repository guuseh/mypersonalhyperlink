import React, { useState, useEffect } from "react"
import Typewriter from "../components/Typewriter"

const Page1 = () => {

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


    return (
      <div className="websitewrapper">
      <div className="websitecontainer">
        <div style={close}></div><div style={{...close, left: "30px"}}></div><div style={{...close, left: "55px"}}></div>
        <Typewriter text="The personal site is a translation of the self, a mirror of the fragmentations of the human mind." delay={30} hover />
        <div className="corner">hyperlink//</div>
      </div>
      </div>
    )
  }
  
  export default Page1
  