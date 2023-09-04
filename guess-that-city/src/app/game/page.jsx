'use client';

import City from "@/components/city_image"
import { useState } from "react"

// Add difficulty selector before this

export default function Home(){


    let [score, setScore] = useState(sessionStorage.getItem("score") ? Number(sessionStorage.getItem("score")):0)
    sessionStorage.setItem("score", `${score}`)
    let [highScore, setHighScore] = useState(localStorage.getItem("highScore") ? Number(localStorage.getItem("highScore")):0)
    localStorage.setItem("highScore", `${highScore}`)

    let [strikes, setStrikes] = useState("")


    return (

        <main className="h-fit pb-12 bg-gradient-to-b from-blue-300 to-green-400 text-center">

        <h1 className="pt-28 text-center text-6xl font-semibold text-gray-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
          Guess that City!
        </h1>

        <h2 className="flex justify-around pt-12 text-gray-100 text-4xl font-semibold" id = "information">
            <span className="">Current streak: {score}</span>
            <span>High Score: {highScore}</span>
        </h2>

        <div className="text-4xl font-semibold pt-12">
            {strikes}
        </div>
        
        <div className="w-fit h-fit text-center relative mx-auto">
            <div className="">
                <City score = {score} setScore = {setScore} highScore = {highScore} setHighScore = {setHighScore} setStrikes = {setStrikes}></City>
            </div>
        </div>

        </main>
        )

}