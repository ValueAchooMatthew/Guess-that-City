import Image from "next/image";

export default function Card({display_text, url_destination, zIndex, game}: {display_text: string, url_destination:string, zIndex?: string, game:boolean}){

    return (
    <div className = {zIndex}>

      <div data-game={game} className="min-h-fit w-fit bg-white rounded-t-2xl py-2.5 rounded-b-md mx-auto shadow-xl data-[game=false]:hover:-translate-y-4 hover:z-50 transition-all duration-200">
        <div data-game={game} className="relative flex items-center justify-center overflow-hidden data-[game=false]:w-56 w-72 data-[game=false]:h-72 h-96 rounded-t-2xl mx-6 mt-4 ">
          <Image data-game={game} className = "data-[game=false]:w-56 data-[game=false]:h-72 w-72 h-96 object-cover overflow-hidden hover:scale-125 transition-all duration-300" width={500} height={500} src={url_destination} alt="" />
        </div>
        <div className='text-center py-4 px-4 max-w-[21rem] h-fit max-h-[7.2rem] overflow-hidden'>
          <span className="font-bold text-2xl max-w-full h-fit overflow-hidden " >
            {display_text}
          </span>
        </div>

      </div>
    
  </div>)

  

}