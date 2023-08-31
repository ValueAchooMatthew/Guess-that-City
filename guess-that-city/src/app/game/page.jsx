import City from "@/components/city_image"
import Guess from "@/components/user_guess"

// Add difficulty selector before this

export default function Home(){

    return (

        <main className="h-screen bg-gradient-to-b from-blue-300 to-green-400 text-center">

        <h1 className="pt-32 text-center text-6xl font-semibold text-gray-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
          Guess that City!
        </h1>

            <div className="pt-24 w-full flex justify-center">
                <City></City>
                {/* <Guess></Guess> */}

            </div>

        </main>
        )


}