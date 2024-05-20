import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"
import Page4 from "./pages/Page4"
import Page5 from "./pages/Page5"
import Page6 from "./pages/Page6"
import Page7 from "./pages/Page7"
import Page8 from "./pages/Page8"
import Page9 from "./pages/Page9"
import Page10 from "./pages/Page10"
import Page11 from "./pages/Page11"
import Goodbye from "./pages/Goodbye"
import "./style.css"
import React from 'react'
import Tooltip from "./components/Tooltip"


const App = () => {

  onmousemove = (e) => {
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
  }

  return (
    <>
    <Tooltip />
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Page5 />} />
        <Route path="/6" element={<Page6 />} />
        <Route path="/7" element={<Page7 />} />
        <Route path="/8" element={<Page8 />} />
        <Route path="/9" element={<Page9 />} />
        <Route path="/10" element={<Page10 />} />
        <Route path="/11" element={<Page11 />} />
        <Route path="/goodbye" element={<Goodbye />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
