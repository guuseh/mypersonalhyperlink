import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Counter({init, speed, type}) {

    let [count, setCount] = useState(parseInt(init));
    const [start, setStart] = useState(false)

    let formatter = Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 2})
    
    useEffect(() => {
        setStart(true)
    }, [])

    useEffect(() => {
        setTimeout(() => {
        if(type=="min")
            setCount(count-1)
        else
            setCount(count+1)
        },parseInt(speed))
    })

    let finalcount = formatter.format(count)

  return (
    <motion.div>
        {finalcount}
    </motion.div>
  )
}

export default Counter