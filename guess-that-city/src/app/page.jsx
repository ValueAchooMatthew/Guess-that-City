import Card from "@/components/card"

export default function Home() {
  return (
      <main className="bg-gradient-to-b from-blue-200 to-green-400 pt-14 -z-10 h-fit pb-48">
      
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
        <div className="text-center mt-36 relative w-fit mx-auto h-fit hover:-translate-y-4 transition-all duration-125">
          <a className="bg-gray-100 rounded-2xl px-7 pt-6 pb-3 shadow-2xl relative z-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]" href = {"/difficulty/"}>
            <span className="text-4xl font-bold pt-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
              Click to play
            </span>
          </a>
          <a className = "absolute -rotate-[16deg] -right-48 -top-24 drop-shadow-[0_1.8px_1.2px_rgba(0,0,0,0.8)]" title="Videoplasty.com, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="#">
            <img width="256" alt="Paper Plane Vector" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Paper_Plane_Vector.svg/256px-Paper_Plane_Vector.svg.png"></img>
          </a>
        </div>
      
      </main>

  )
}