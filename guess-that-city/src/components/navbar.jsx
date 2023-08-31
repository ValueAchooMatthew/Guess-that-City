export default function Navbar(){
    return(
    <div>
        <div className="bg-orange-500 w-48 h-48 rounded-full absolute -top-16 -left-16 z-20">
        </div>

        <div className="w-full h-fit bg-orange-400 absolute top-0 rounded-br-full flex justify-center py-2">
          <a className = "ml-24 mr-48 z-50" href="#About">
            <span className="text-white font-semibold text-4xl">About</span>
          </a>
          <a className="ml-48 z-50" href="https://github.com/ValueAchooMatthew?tab=repositories" target="_">
            <span className="text-white font-semibold text-4xl">More projects</span>
          </a>
        </div>

        <div className="h-full w-6 absolute bg-orange-600 top-0 z-10">
        </div>
        <div className="h-full w-12 absolute bg-orange-400 top-4">
        </div>
    </div>
    )
}
