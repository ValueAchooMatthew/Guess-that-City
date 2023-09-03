'use client';

import React, { useCallback } from "react";

export default function Guess({city_name, text, setText, score, setScore, highScore, setHighScore}){


    const handleSubmit = useCallback(function(event){
        
        // Use UseState
        event.preventDefault()
        const guess = document.getElementById("userGuess")

        if(text.toLowerCase() === city_name.toLowerCase()){
            setScore(score+1)
            location.reload()
            console.log("Correct!")
            if(score >= highScore){
              setHighScore(score)
              localStorage.setItem("score", score)
            }

        }else{
          guess.classList.add("animate-horizontalShaking")
          if(score > highScore){
            setHighScore(score)
            localStorage.setItem("score", score)
          }

          setScore(0)
          sessionStorage.setItem("score", score)
          setTimeout(()=>{
            guess.classList.remove("animate-horizontalShaking")

          }, 1000)


        }
      }, [city_name, text]) 

    return(
    <div className="h-fit py-3 px-3 w-96 mt-16 bg-white rounded-2xl shadow-2xl border-[3px] border-black">
        <form onSubmit={handleSubmit} className="font-semibold">
            <input autoFocus value={text} onChange={(change)=>{setText(change.target.value)}} className="w-full rounded-3xl py-3 pl-6 focus:outline-none text-lg" type="text" placeholder="Type your guess here..."/>
        </form>
    
    </div>
    )
}