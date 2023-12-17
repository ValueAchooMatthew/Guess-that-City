import Image from "next/image";

export default function Card({display_text, url_destination, zIndex, game}: {display_text: string, url_destination:string, zIndex?: string, game:boolean}){

    return (
    <div className = {zIndex}>

      <div data-game={game} className="min-h-fit w-fit bg-white rounded-t-2xl sm:py-2.5 py-0.5 rounded-b-md mx-auto shadow-xl data-[game=false]:hover:-translate-y-4 hover:z-50 transition-all duration-200">
        <div data-game={game} className="relative flex items-center justify-center overflow-hidden 
        md:data-[game=false]:w-56 sm:data-[game=false]:w-40 data-[game=false]:w-28 md:w-72 w-60 
        md:data-[game=false]:h-72 sm:data-[game=false]:h-56 data-[game=false]:h-44 md:h-96 h-80
         rounded-t-2xl sm:mx-6 mx-4 mt-4 ">
          <Image data-game={game} 
          className = {`md:data-[game=false]:w-56 sm:data-[game=false]:w-40 data-[game=false]:w-28 md:w-72 w-60 
          md:data-[game=false]:h-72 sm:data-[game=false]:h-56 data-[game=false]:h-44 md:h-96 h-80
          object-cover overflow-hidden hover:scale-125 transition-all duration-300`} 
          width={500} height={500} src={url_destination} alt="" />
        </div>
        <div className='text-center sm:py-4 py-2 sm:px-4 px-2 md:max-w-[21rem] max-w-[16rem] h-fit max-h-[7.2rem] overflow-hidden'>
          <span className="font-bold sm:text-2xl text-lg max-w-full h-fit overflow-hidden " >
            {display_text}
          </span>
        </div>
      </div>
  </div>)
}