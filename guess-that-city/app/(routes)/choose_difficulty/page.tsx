"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home(){
    const [difficulty, setDifficulty] = useState<"casual" | "expert">("casual")

    return (
        <main className="h-screen pb-12 bg-gradient-to-b from-blue-300 to-green-400 text-center">
            <h1 className="pt-28 text-center text-6xl font-semibold text-gray-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
              Guess that City!
            </h1>
            <h3 className="text-center text-3xl mt-10">
              Choose your Difficulty:
            </h3>
            <div className=" flex justify-around mt-48">
                <Link onClick={()=>{setDifficulty("casual")}} className="bg-gray-100 rounded-2xl px-7 py-4 shadow-2xl relative z-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] hover:-translate-y-4 transition-all duration-125" 
                href={{pathname:"/game/casual"}}>
                    <span className="text-5xl font-bold py-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">Casual</span>
                </Link>
                <Link onClick={()=>{setDifficulty("expert")}} className="bg-gray-100 rounded-2xl px-8 py-4 shadow-2xl relative z-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] hover:-translate-y-4 transition-all duration-125" 
                href={{pathname:"/game/expert"}}>
                    <span className="text-5xl font-bold py-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">Expert</span>
                </Link>
            </div>
        </main>
        )
}