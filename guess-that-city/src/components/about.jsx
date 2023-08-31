export default function About(){

    return (
        <div className=" bg-gradient-to-b from-green-300 to-green-200 w-full h-fit relative z-50 " id = "About">
            <div className="bg-orange-400 h-full w-12 absolute rounded-br-full">
                <div className="bg-orange-600 h-full w-6 rounded-br-full absolute -top-4">

                </div>
            </div>

            <div className="text-center text-gray-900 max-w-4xl mx-auto pt-12">
                <div className="mb-8 bg-orange-500 w-full h-8 rounded-b-full mx-auto relative">
                    <div className="absolute w-full h-4 bg-orange-400 rounded-b-full">
                         
                    </div>
                </div>

                <h1 className="text-6xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.25)]">
                    About This Website!
                </h1>
                <p className="text-2xl font-semibold max-w-2xl mx-auto my-8">
                    Hello and welcome to "Guess that City"! In this game, you are giving a random photo of a city
                    and it's your job to choose which city it's of. Ready to put your know-how to the test? Select from different difficulties
                    to challenge your geography knowledge. What are you waiting for? Start playing by clicking the button above
                </p>
                <p className="text-xl">
                    Project by Matthew Farah :P
                </p>
                <div className="mt-8 bg-orange-500 w-full h-8 rounded-t-full mx-auto relative">
                    <div className="absolute bottom-0 w-full h-4 bg-orange-400 rounded-t-full">

                    </div>
                </div>
                <div className="absolute bottom-0 right-20">
                    <a className="bg-gray-100 rounded-t-2xl px-8 pb-1 pt-4 border-gray-900 border-t-4 border-x-4" href="#front-page">
                        <span className="text-black text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
                            Return to top
                        </span>
                    </a>
                </div>
            </div>

        </div>
    )


}