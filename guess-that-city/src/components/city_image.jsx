'use client';

import GuessEX from "./guess-expert"
import GuessEZ from "./guess-easy";

import { useEffect, useState, Suspense } from "react"
import Image from "next/image";
import Loading from "./loading";


export default function City({score, setScore, highScore, setHighScore, setStrikes, easy}){

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  
  useEffect(()=>{
    const fetch_data = async () =>{
    let cities = await fetch("https://api.teleport.org/api/urban_areas/")
    cities = await cities.json()
    let city = cities._links["ua:item"][Math.floor(Math.random() * cities.count)]
        
    if(easy){
      const cityName = city.name
      let options = [cities._links["ua:item"][Math.floor(Math.random() * cities.count)].name, cities._links["ua:item"][Math.floor(Math.random() * cities.count)].name, cityName]
      shuffle(options)
      city = await fetch(`${city.href}`)
      city = await city.json()
      city = await fetch(city._links["ua:images"].href)
      city = await city.json()
      const imgSrc = city.photos[0].image.mobile
      return [cityName, imgSrc, options]

    }else{
      const cityName = city.name
      city = await fetch(`${city.href}`)
      city = await city.json()
      city = await fetch(city._links["ua:images"].href)
      city = await city.json()
      const imgSrc = city.photos[0].image.mobile
      return [cityName, imgSrc]
    }
    
    }
    if(easy){
      fetch_data()
      .then((array)=>{
        setCityName(array[0])
        setImgSrc(array[1])
        setOptions(array[2])})
        .catch(()=>{console.log("An error has occured")})

    }else{
      fetch_data()
      .then((array)=>{setCityName(array[0])
        setImgSrc(array[1])})
        .catch(()=>{console.log("An error has occured")})
    }

  }, [score])

  let [text, setText] = useState("")
  let [options, setOptions] = useState([])
  let [imgSrc, setImgSrc] = useState(undefined)
  let [cityName, setCityName] = useState(undefined)  

  return(
    <div className="mt-12">
      <div className="min-h-fit max-w-fit bg-white rounded-t-2xl pt-4 rounded-b-md mx-auto shadow-2xl">
        <div className="relative flex items-center justify-center overflow-hidden w-80 h-96 rounded-t-2xl mx-6 mt-4 ">
          <Suspense fallback = {React.lazy}>
            {imgSrc ? <Image width={1000} height={1000} className = "w-72 h-96 object-cover overflow-hidden hover:scale-125 transition-all duration-150" src={imgSrc} alt=""></Image> : null}
          </Suspense>

        </div>
        <div className='text-center py-4 max-w-xs mx-auto max-h-fit overflow-hidden' id = "userGuess">
          <span className="text-3xl font-semibold">
            {text}
          </span>

        </div>  
      </div>
      
      <div >
        {easy ? <GuessEZ city_name = {cityName} score = {score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} options = {options}></GuessEZ>:
        <GuessEX city_name = {cityName} text={text} setText={setText} score = {score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} setStrikes = {setStrikes}></GuessEX>}
      </div>


    </div>
  )

}