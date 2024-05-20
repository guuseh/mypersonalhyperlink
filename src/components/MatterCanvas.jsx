import { useEffect, useRef } from 'react'
import * as Matter from "matter-js"

const MatterCanvas = () => {
    const sceneRef = useRef()
    const engineRef = useRef()
    const requestRef = useRef()
    const boxRef = useRef()
    const floorRef = useRef()

    // let Engine = Matter.Engine;
    // let Render = Matter.Render;
    // let World = Matter.World;
    // let Bodies = Matter.Bodies;
    // let Runner = Matter.Runner;

    const animate = () => {
        const cw = document.body.clientWidth;
        const ch = document.body.clientHeight;

        engineRef.current = Matter.Engine.create({})
        const engine = engineRef.current
        // const engine = Matter.Engine.create({})

        // let render = Render.create({
        //     element: sceneRef.current,
        //     engine: engine,
        //     options: {
        //         width: cw,
        //         height: ch,
        //         wireframes: false,
        //         background: "transparent"
        //     }
        // })

        const floor = Matter.Bodies.rectangle(cw/2, ch+20, cw, 20, {
            isStatic: true,
            // render: {
            //     fillStyle: "blue"
            // }
        })

        const box = {
            body: Matter.Bodies.rectangle(150,0,100,40),
            elem: boxRef.current,
            render(){
                const {x, y} = this.body.position;
                this.elem.style.top = `${y-20}px`;
                this.elem.style.left = `${x -20}px`;
                this.elem.style.transform = `rotate(${this.body.angle}rad)`;
            }
        }
        const mouseConstraint = Matter.MouseConstraint.create(
            engine,
            {element: document.body}
          );
        
        Matter.World.add(engine.world, [box.body, floor, mouseConstraint])

        // Runner.run(engine);
        // Render.run(render);
        (function rerender() {
            box.render();
            // Matter.Runner.update(engine);
            Matter.Engine.update(engine);
            requestRef.current = requestAnimationFrame(rerender)
        })
    }

    useEffect(() => {
        animate();
        return () => {
            cancelAnimationFrame(requestRef.current);
            Matter.Engine.clear(engineRef.current)
        }
    }, [])


  return (
    <>
    <div ref={boxRef} id="box1">some text</div>
    <div ref={floorRef} id="floor"></div>
    {/* <div id="matterid" ref={sceneRef} style={{position: "absolute", width: "100vw", height: "100vh"}}> */}
    {/* </div> */}
    </>
  )
}

export default MatterCanvas