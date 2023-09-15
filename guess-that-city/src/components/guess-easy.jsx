'use client';

import React, { useCallback, useState } from "react";

export default function GuessEZ({city_name, score, setScore, highScore, setHighScore, options}){

  let [answer, setAnswer] = useState(null)

    const handleClick = (event) =>{

      if(event.target.innerText.toLowerCase() === city_name.toLowerCase()){
        setScore(score+1)
        sessionStorage.setItem("score", score)
        if(score >= highScore){
          setHighScore(score+1)
          localStorage.setItem("highScore", score)
        }
        setAnswer("Correct Answer!")
        setTimeout(()=>{
          setAnswer("")

        }, 1000)
    
      }else{
        setAnswer(`Sorry, the answer was ${city_name}`)
        sessionStorage.setItem("score", 0)
        setScore(0)
        setTimeout(()=>{
          setAnswer("")

        }, 1000)
      }

    }

    return(
    <>
      <div className="pt-3 pb-3">
        <span className="text-center text-4xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] "> {answer ? answer:null}</span>
      </div>
      <div className="flex justify-center">
        <button onClick={handleClick} className="bg-gray-100 rounded-full shadow-2xl px-8 py-3 hover:-translate-y-2 transition-all duration-100">
          <span className="text-3xl font-semibold ml-2">
            {options[0]}
          </span>
        </button>
        <button onClick={handleClick} className="bg-gray-100 rounded-full shadow-2xl px-8 py-4 mx-6 hover:-translate-y-2 transition-all duration-100">
          <span className="text-3xl font-semibold">
            {options[1]}
          </span>
        </button>
        <button onClick={handleClick} className="bg-gray-100 rounded-full shadow-2xl px-8 py-4 hover:-translate-y-2 transition-all duration-100">
          <span className="text-3xl font-semibold">
            {options[2]}
          </span>
        </button>
      </div>

    </>

    )
}