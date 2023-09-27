export default function About(){

    return (
        <div className=" bg-gradient-to-b from-green-400 to-green-300 w-full h-fit relative " id = "About">
            <div className="border-dashed max-w-6xl h-0 border-[1px] border-black mx-auto -z-50"></div>

            {/* <div className=" bg-orange-400 h-full w-12 absolute rounded-br-full -top-12">
                <div className="bg-orange-600 h-full w-6 rounded-br-full absolute -top-4">

                </div>
            </div> */}

            <div className="text-center text-gray-900 max-w-4xl mx-auto pt-20">

                <div className="w-fit mx-auto relative">
                    <h1 className="text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.25)]">
                        About This Website!
                    </h1>
                    <p className="text-2xl font-semibold max-w-3xl mx-auto my-8">
                        Hello and welcome to "Guess that City"! In this game, you are given a random photo of a city
                        and it's your job to choose which city it's of. Ready to put your know-how to the test? Select from different difficulties
                        to challenge your geography knowledge. What are you waiting for? Start playing by clicking the button above
                    </p>
                    <p className="text-xl">
                        Project by Matthew Farah :P
                    </p>
                    <div className="absolute -right-8 bottom-0 mb-3 ">
                        <a className="bg-gray-100 rounded-t-2xl px-8 pb-4 pt-4 shadow-2xl " href="#Top">
                            <span className="text-black text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
                                Return to top
                            </span>
                        </a>
                    </div>
                </div>

            </div>



        </div>
    )


}