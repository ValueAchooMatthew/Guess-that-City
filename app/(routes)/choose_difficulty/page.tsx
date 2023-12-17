"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home(){
    const [difficulty, setDifficulty] = useState<"casual" | "expert">("casual")

    return (
        <main className="h-screen pb-12 bg-gradient-to-b from-blue-300 to-green-400 text-center pl-8">
            <h1 className="pt-28 px-12 text-center xs:text-6xl text-4xl font-semibold text-gray-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
              Guess that City!
            </h1>
            <h3 className="text-center px-12 sm:text-3xl text-xl mt-10">
              Choose your Difficulty:
            </h3>
            <div className=" flex justify-evenly mt-48 md:text-5xl text-3xl">
                <Link onClick={()=>{setDifficulty("casual")}} className="bg-gray-100 rounded-2xl md:px-8 px-4 md:py-4 py-2 shadow-2xl relative z-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] hover:-translate-y-4 transition-all duration-125" 
                href={{pathname:"/game/casual"}}>
                    <span className=" font-bold py-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">Casual</span>
                </Link>
                <Link onClick={()=>{setDifficulty("expert")}} className="bg-gray-100 rounded-2xl md:px-8 px-4 md:py-4 py-2 shadow-2xl relative z-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] hover:-translate-y-4 transition-all duration-125" 
                href={{pathname:"/game/expert"}}>
                    <span className="font-bold py-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">Expert</span>
                </Link>
            </div>
        </main>
        )
}