export default function Navbar(){
    return(
    <div className="">
        <a className="bg-orange-500 md:w-48 md:h-48 xs:w-32 xs:h-32 w-24 h-24 rounded-full absolute
        
        -top-8 -left-10   xs:-top-10 xs:-left-12 md:-top-16 md:-left-16 z-20 hover:scale-125 transition-all duration-150" href="/" id = "Top">
        </a>
        <div className="w-full h-fit bg-orange-400 absolute top-0 rounded-br-full flex justify-evenly py-2 text-lg xs:text-2xl md:text-4xl">
          <a className = "z-50" href="#About">
            <span className="text-white font-semibold  ">About</span>
          </a>
          <a className="z-50" href="https://github.com/ValueAchooMatthew?tab=repositories" target="_">
            <span className="text-white font-semibold">More projects</span>
          </a>
        </div>
    </div>
    )
}