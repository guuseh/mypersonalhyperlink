import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {map} from "../assets/map.js"
// @refresh reset

const Scrambler = ({ move, classs, text, customchar, cont, secondtext }) => {
    const [textarray, setTextarray] = useState([]);
    // const [secondText, setSecondText] = useState([])
    const [custom, setCustomchar] = useState([])
    const letterarray = [];
    // const secondarray = [];
    const customarray = [];

    useEffect(() => {
        setTextarray(text.split(" "))
        // setSecondText(secondtext.split(" "))
        customchar && setCustomchar(String(customchar).split(","))
        setTimeout(() => {
            firstscramble();
        }, 10)
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         firstscramble();
    //     }, 10)
    // }, [move])

    textarray.forEach((word,i) => {
        let indiv = word.split('')
        letterarray.push(indiv)
    })
    // secondText.forEach((word, i) => {
    //     let indiv = word.split('')
    //     secondarray.push(indiv)
    // })
    customchar && custom.forEach((char, i) => {
        customarray.push(char)
    })
    // console.log(secondarray)

    const firstscramble = () => {
    document.querySelectorAll(`.${classs}`).forEach((element, i) => {
        let letter = element.innerHTML;
        setTimeout(() => {
            let character = ["0", "1", "2", "3", "4", "5", "{", "}", "+", "-", "=", "*", "#", ";", "A", "B", "C", "D", "E", "F"]
            character.push(letter)
            character.forEach((char, i) => {
                let index = map(Math.random(), 0, 1, 0, character.length)
                setTimeout(() => {
                    element.innerHTML = character[parseInt(index)]
                }, i*70)
            }) 
            setTimeout(() => {
                element.innerHTML = letter
            }, character.length*70)
        }, i*4)
        })
    }

    // const lastscramble = () => {
    //     console.log(letterarray)
    //     const total = document.querySelectorAll(`.${classs}`).length
    //     letterarray.splice(secondarray.length, 1)
    //     // document.querySelectorAll(`.${classs}`).forEach((element, i) => {
    //     secondarray.forEach((letter,i) => {
    //         letterarray[i] = secondarray[i] 
    //         })
    //     document.querySelectorAll(`.${classs}`).forEach((element, i) => {
    //         setTimeout(() => {
    //             let letter = element.innerHTML
    //             let character = ["0", "1", "2", "3", "4", "5", "{", "}", "+", "-", "=", "*", "#", ";", "A", "B", "C", "D", "E", "F"]
    //             // character.push(letter)
    //             character.forEach((char, i) => {
    //                 let index = map(Math.random(), 0, 1, 0, character.length)
    //                 setTimeout(() => {
    //                     element.innerHTML = character[parseInt(index)]
    //                 }, i*70)
    //             }) 
    //             setTimeout(() => {
    //                 element.innerHTML = letter
    //             }, character.length*70)
    //         }, 100)
    //     })
    //     console.log(letterarray)
    //     }

    // move && lastscramble();

    function scramble(e, lett) {
       let character = customchar? customarray : ["0", "1", "2", "3", "4", "5", "{", "}", "+", "-", "=", "*", "#", ";"]
       character.push(lett)
       character.forEach((char, i) => {
        setTimeout(() => {
            e.target.innerHTML = char
        }, (i+1)*70)
        
       })
    }

  return (
    <div style={{cursor: "default"}}>
        {letterarray.map((word, i) => {
            // if(move){ setTimeout(() => {return}, 1000)}
            // else
             return <div key={i} style={{display: "inline-block"}}>
                {word.map((letter, j) => {
                    return (
                    <motion.span key={i+j} className={classs}
                        onHoverStart={(e) => scramble(e, letter)}
                    >{letter}</motion.span>
                )})}
            {/* <span className={classs}>&nbsp;</span> */}
            &nbsp;</div>
        })}
        {/* {secondarray.map((word, i) => {
            if(!move){return}
            else
             return <div key={i} style={{display: "inline-block"}}>
                {word.map((letter, j) => {
                    return (
                    <motion.span key={i+j} className={classs}
                        onHoverStart={(e) => scramble(e, letter)}
                    >{letter}</motion.span>
                )})}
            &nbsp;</div>
        })} */}
    </div>
  )
}

export default Scrambler