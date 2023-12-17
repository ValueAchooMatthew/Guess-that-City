/* eslint-disable react/no-unescaped-entities */
export default function About(){
    return (
        <div className=" bg-gradient-to-b from-green-400 to-green-300 w-full h-fit relative md:pl-12 pl-8" id = "About">
            <div className="border-dashed lg:w-[60rem] xs:w-[30rem] w-[20rem] h-0 border-[1px] border-black mx-auto -z-50"></div>

            <div className="text-center text-gray-900 max-w-4xl mx-auto p-10 pb-1">
                <p className="text-xl mb-8">
                    Project by Matthew Farah :P
                </p>
                <div className="w-fit mx-auto relative">
                    <h1 className="text-5xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.25)]">
                        About This Website!
                    </h1>
                    <p className="md:text-2xl sm:text-lg text-sm font-semibold md:max-w-3xl xs:max-w-lg max-w-sm mx-auto my-8">
                        Hello and welcome to "Guess that City"! In this game, you are given a random photo of a city
                        and it's your job to choose which city it's of. Ready to put your know-how to the test? Select from different difficulties
                        to challenge your geography knowledge. What are you waiting for? Start playing by clicking the button above
                    </p>

                    {/* <div className="-left-8 bottom-0 pb-2 mr-[30rem] md:mr-[20rem]">
                        <a className="bg-gray-100 rounded-t-2xl md:px-8 px-4 md:py-4 py-2 shadow-2xl " href="#Top">
                            <span className="text-black md:text-2xl text-base font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)]">
                                Return to top
                            </span>
                        </a>
                    </div> */}
                </div>

            </div>



        </div>
    )


}