import Card from "@/components/card"
import About from "@/components/about"

export default function Home() {
  return (
    <div>
      <main className="bg-gradient-to-b from-blue-200 to-green-300 h-screen pt-14 -z-10" id = "front-page">
      
        <h3 className="text-center text-3xl mt-10">
          Welcome to
        </h3>
        <h1 className="text-center text-6xl font-semibold text-gray-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
          Guess that City!
        </h1>

        <div className="relative w-fit mx-auto mt-24">
          <div className="inline-block -rotate-[26deg] absolute -left-28 -bottom-12 z-10 hover:z-50 transition-all duration-150 ">
            <Card city_name={"San Francisco"} 
            url_destination={"https://etimg.etb2bimg.com/thumb/msid-99311825,imgsize-1965510,width-1200,height=765,overlay-ettravel/destination/international/san-francisco-predicts-23-9-million-visitor-arrivals-in-2023-spends-to-grow-to-usd-8-7-bn.jpg"}
            zIndex={"z-20"}/>
          </div>
          <div className="inline-block relative z-40">
            <Card city_name={"Melbourne"} 
            url_destination={"https://media.cnn.com/api/v1/images/stellar/prod/230417065723-melbourne-australia-skyline-restricted.jpg?c=16x9&q=h_720,w_1280,c_fill"}
            zIndex={"z-50"}/>
          </div>
          <div className="inline-block rotate-[26deg] absolute -right-28 -bottom-12 z-10 hover:z-50 transition-all duration-150">
            <Card city_name={"Vienna"} 
            url_destination={"https://img.monocle.com/25-25/dsc07069-5f0dbcf571bc1.jpg?w=760&resize=aspectfit"}
            zIndex={"z-20"}/>
          </div>
        </div>
        <div className="text-center mt-36">
          <button className="bg-gray-100 rounded-2xl px-7 py-4 shadow-2xl hover:-translate-y-4 transition-all duration-125">
            <span className="text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
              Click to play
            </span>
          </button>
        </div>
      
      </main>
    </div>
 

  )
}