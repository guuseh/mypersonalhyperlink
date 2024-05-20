import "regenerator-runtime/runtime";
import { useState } from 'react'
import ReactDOM from "react-dom"
import * as Phys from "react-dom-box2d"
import Typewriter from "../components/Typewriter"
import Counter from "../components/Counter"

const Scene = ({count}) => {

  const blockstyle = {
    backgroundColor: "white",
    border: "2px solid blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    boxSizing: "border-box",
    height: "100%",
    width: "100%"
  }

    const w = window.innerWidth;
    const h = window.innerHeight

  return (
    <>
    <Phys.World width={window.innerWidth} height={window.innerHeight} gravity={[0, 10]} className="world" style={{position: "absolute",zIndex: "100", pointerEvents: "none"}}>
      
    {count >= 1 && count < 16 && 
      <Phys.Item left={100} top={0} restitution={0.8}>
        <div style={{...blockstyle, width: "300px", height: "100px"}}>
          <Typewriter text="a mirror of the fragmentations of the human mind" delay={30}/>
        </div>
        </Phys.Item>
      }
      
    {count >= 2 && count < 17 &&
      <Phys.Item left={300} top={0} restitution={0.8} shape="circle" >
        <div className="icon-round" style={{border: "white 2px solid", backgroundColor: "rgb(0,0,255)", width: "200px", height: "200px"}}>
        </div>
      </Phys.Item>
      }

    {count >= 3 && count < 18 &&
      <Phys.Item left={w/2} top={0} restitution={0.8} >
        <div className="crossout" style={{width: "200px", height: "400px"}}></div>
      </Phys.Item>
      }

    {count >= 4 && count < 19 &&
      <Phys.Item left={w-300} top={0} restitution={0.8} >
        <div style={{...blockstyle, width: "200px", height: "100px"}}>
          Find me by my name
        </div>
      </Phys.Item>
      }

    {count >= 5 && count < 20 &&
      <Phys.Item left={w/2+100} top={0} restitution={0.8}>
        <div style={{...blockstyle, backgroundColor: "blue", border: "2px solid white", color: "white", width: "220px", height: "120px", fontSize: "2.5rem"}}>
          <Counter init={34} speed={200}/> followers
        </div>
      </Phys.Item>
      }

    {count >= 6 && count < 21 &&
      <Phys.Item left={w-400} top={0} restitution={0.8} shape="circle">
        <div className="icon-light" style={{...blockstyle, width: "150px", height: "150px"}}>
        </div>
      </Phys.Item>
      }

    {count >= 7 && count < 22 &&
      <Phys.Item left={50} top={0} restitution={0.8} >
        <div style={{...blockstyle, fontSize: "2.5rem", width: "200px", height: "100px"}}>
          <Counter init={87201} speed={100} type="min"/>
        </div>
      </Phys.Item>
      }

    {count >= 8 && count < 23 &&
      <Phys.Item left={w/2} top={0} restitution={0.8} >
        <div style={{...blockstyle, fontFamily: "clacon", width: "min-content", height: "min-content"}} >
          my /room
        </div>
      </Phys.Item>
      }

    {count >= 9 && count < 24 &&
      <Phys.Item left={200} top={0} restitution={0.8} >
        <div style={{...blockstyle, backgroundColor: "blue", border: "2px solid white", color: "white", width: "min-content", height: "150px", fontSize: "2rem", fontFamily: "clacon"}}>
          Maximise your value
        </div>
      </Phys.Item>
      }

    {count >= 10 && count < 25 &&
      <Phys.Item left={100} top={0} restitution={0.8} shape="circle">
        <div className="icon-light" style={{width: "300px", height: "300px"}}>
        </div>
      </Phys.Item>
      }

    {count >= 11 && count < 26 &&
      <Phys.Item left={w-400} top={0} restitution={0.8}>
        <div className="crossout" style={{width: "300px", height: "200px"}}></div>
      </Phys.Item>
      }

    {count >= 12 && count < 27 &&
      <Phys.Item left={100} top={0} restitution={0.8}>
      <div className="crossout" style={{width: "100px", height: "100px"}}></div>
    </Phys.Item>
      }

    {count >= 13 && count < 28 &&
      <Phys.Item left={w-200} top={0} restitution={0.8}>
        <div className="link" style={{...blockstyle, width: "80px", height: "60px", color: "black"}}>#id</div>
      </Phys.Item>
      }

    {count >= 14 && count < 29 &&
      <Phys.Item left={100} top={0} restitution={0.8}>
        <div style={{...blockstyle, fontFamily: "clacon", width: "min-content", height: "min-content"}} >
          http://www.mypersonalwebpageisthecoolest.com/
        </div>
      </Phys.Item>
      }

    {count >= 15 && count < 33 &&
      <Phys.Item left={100} top={0} restitution={0.8}>
        <div style={{...blockstyle, backgroundColor: "blue", border: "2px solid white", color: "white", width: "min-content", height: "min-content",}}>
          goodbye
        </div>
      </Phys.Item>
      }

      </Phys.World>
      </>
  )
}

export default Scene