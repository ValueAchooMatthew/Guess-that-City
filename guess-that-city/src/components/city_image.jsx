'use client';

import Guess from "./guess"
import { useEffect, useState } from "react"
import Image from "next/image";


export default function City({score, setScore, highScore, setHighScore}){

  useEffect(()=>{
    const fetch_data = async () =>{
    let cities = await fetch("https://api.teleport.org/api/urban_areas/")
    cities = await cities.json()
    let city = cities._links["ua:item"][Math.floor(Math.random() * cities.count)]
    const cityName = city.name
    city = await fetch(`${city.href}`)
    city = await city.json()
    city = await fetch(city._links["ua:images"].href)
    city = await city.json()
    const imgSrc = city.photos[0].image.mobile
    return [cityName, imgSrc]
    }
    fetch_data()
    .then((array)=>{setImgSrc(array[1])
                    setCityName(array[0])})
    .catch(()=>{console.log("An error has occured")})
  }, [])

  let [imgSrc, setImgSrc] = useState(undefined)
  let [cityName, setCityName] = useState(undefined) 
  let [text, setText] = useState("")

  return(
    <div>
      <div className="min-h-fit max-w-fit bg-white rounded-t-2xl pt-4 rounded-b-md mx-auto shadow-2xl">
        <div className="relative flex items-center justify-center overflow-hidden w-80 h-96 rounded-t-2xl mx-6 mt-4 ">
          {imgSrc ? <Image width={1000} height={1000} className = "w-72 h-96 object-cover overflow-hidden hover:scale-125 transition-all duration-150" src={imgSrc} alt=""></Image> : null}
        </div>
        <div className='text-center py-4' id = "userGuess">
          <span className="font-bold text-2xl">
            {text}
          </span>
        </div>  
      </div>
      
      <div>
        <Guess city_name = {cityName} text={text} setText={setText} score = {score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} ></Guess>
      </div>
    </div>
  )

}