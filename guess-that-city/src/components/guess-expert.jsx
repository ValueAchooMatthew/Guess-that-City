'use client';

import React, { useCallback, useState } from "react";

export default function GuessEX({city_name, text, setText, score, setScore, highScore, setHighScore, setStrikes}){

  let [tries, setTries] = useState(0)
  
  let [answer, setAnswer] = useState(null)

  if(tries >= 3){
    
    if(score >= highScore){
      setHighScore(score)
      localStorage.setItem("highScore", score)
    }
    setScore(0)
    setTries(0)
    setStrikes("Sorry, you ran out of tries")
    setAnswer(`The answer is ${city_name}`)
    sessionStorage.setItem("score", score)

    setTimeout(()=>{
      setAnswer("")
      setStrikes("")
      location.reload()
    }, 2000)

  }

    const handleSubmit = useCallback(function(event){
        
        // Use UseState
        event.preventDefault()
        const guess = document.getElementById("userGuess")

        if((city_name) && text.trim().toLowerCase() === city_name.toLowerCase()){
            setScore(score+1)
            if(score >= highScore){
              setHighScore(score+1)
              localStorage.setItem("highScore", score)
            }
            set
            setAnswer("Correct Answer!")
            setTimeout(()=>{
              location.reload()


            }, 2000)

        }else{
          guess.classList.add("animate-horizontalShaking")
          setTimeout(()=>{
            guess.classList.remove("animate-horizontalShaking")

          }, 1000)
          setTries(tries+1)

        }
      }, [city_name, text]) 

    return(
    <>
      <div className="pt-3 pb-3">
        <span className="text-center text-4xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] "> {answer ? answer:null}</span>
      </div>
      <div className="h-fit py-3 px-3 w-96 mx-auto bg-white rounded-2xl shadow-2xl border-[3px] border-black">
        <form onSubmit={handleSubmit} className="font-semibold">
          <input autoFocus value={text} onChange={(change)=>{setText(change.target.value)}} className="w-full rounded-3xl py-3 pl-6 focus:outline-none text-lg" type="text" placeholder="Type your guess here..."/>
        </form>

      </div>

    </>


    )
}