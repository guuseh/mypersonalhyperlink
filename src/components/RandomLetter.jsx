import React, { useState, useEffect } from 'react';
import {map} from "../assets/map.js"

function RandomLetter({i}) {
    const [letter, setLetter] = useState('a')
    let character = ["0", "1", "2", "3", "4", "5", "{", "}", "+", "-", "=", "*", "#", ";", "A", "B", "C", "D", "E", "F"]

    useEffect(() => {
    setInterval(() => {
        let index = parseInt(map(Math.random(), 0, 1, 0, character.length-1))
        setLetter(character[index])
    },100)
}, [])

  return (
    <span>{letter} </span>
  )
}

export default RandomLetter