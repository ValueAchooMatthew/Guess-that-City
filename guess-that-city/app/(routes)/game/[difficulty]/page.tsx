"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import Image from "next/image";

import CityType, { ButtonText, CasualCity, ExpertCity } from "@/app/_types/Types";
import FetchImages from "../../../_components/fetch_images/FetchImages";
import Card from "@/app/_components/Card";
import RandomNumbers from "@/app/_components/fetch_images/helper_functions/RandomNumberGenerator";


// Have to generate random numbers outside of component because otherwise if a use state is called, the component is rerendered and random numbers 
// will regenerate and therefore shift the position of the options
const random_nums = RandomNumbers(3);

export default function Home({params}: {params: {difficulty: "casual" | "expert"}}){

    const difficulty = params.difficulty;
    const [data, setData] = useState<CasualCity | ExpertCity | undefined>();
    const [displayText, setDisplayText] = useState<string>("")
    const [scoreCasual, setScoreCasual] = useState<number>(0);
    const [scoreExpert, setScoreExpert] = useState<number>(0);
    const [highScoreCasual, setHighScoreCasual] = useState<number>(0);
    const [highScoreExpert, setHighScoreExpert] = useState<number>(0);
    const [strikes, setStrikes] = useState<number>(0);
    const [response, setResponse] = useState<string>("");
    // Created updating state to prevent users from clicking on multiple things at one and thus make superfluous data fetches and state changes
    const [updating, setUpdating] = useState<boolean>(false);

    const fetchData = async () => {
        const fetchedData: CasualCity | ExpertCity = await FetchImages(difficulty);
        setData(fetchedData);
    };      

    useEffect(()=>{
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [difficulty]);

    useEffect(()=>{
        const savedScoreCasual = window.localStorage.getItem("scoreCasual");
        const savedHighScoreCasual = window.localStorage.getItem("highScoreCasual");
        const savedScoreExpert = window.localStorage.getItem("scoreExpert");
        const savedHighScoreExpert = window.localStorage.getItem("highScoreExpert");
        if(savedScoreCasual){
            setScoreCasual(parseInt(savedScoreCasual));
        }
        if(savedHighScoreCasual){
            setHighScoreCasual(parseInt(savedHighScoreCasual));
        }
        if(savedScoreExpert){
            setScoreExpert(parseInt(savedScoreExpert));
        }
        if(savedHighScoreExpert){
            setHighScoreExpert(parseInt(savedHighScoreExpert));
        }

    }, []);    

    if(data){
    // Creating random numbers to select possible options
    const handleClick = (event: SyntheticEvent)=>{
        // Don't do anything if data is already being fetched
        if(event.target instanceof HTMLButtonElement && !updating){
            setUpdating(true);
            if(event.target.outerText == data.city.name){
                setScoreCasual((prevScoreCasual)=>{
                    window.localStorage.setItem("scoreCasual", `${scoreCasual+1}`);
                    return (prevScoreCasual+1)});
                setResponse("Correct!")
                setHighScoreCasual((prevHighScore)=>{
                    window.localStorage.setItem("highScoreCasual", `${prevHighScore+1}`);
                    return (scoreCasual+1 > prevHighScore? scoreCasual+1:prevHighScore);
                });
                setUpdating(true);
            }else{
                setScoreCasual(()=>{
                    window.localStorage.setItem("scoreCasual", `0`);
                    return (0)
                });
                setResponse("Sorry, the answer was " +data.city.name);
                setUpdating(true);
            }

            // Gives time to display response information before updating data to display next city
            setTimeout(()=>{
                fetchData();
                setResponse("");
                setUpdating(false);
            }, 1200)
        }
    }
    const handleChange = (event: SyntheticEvent) =>{
        if(event.target instanceof HTMLInputElement){
            setDisplayText(event.target.value);
        }

    }
    const handleSubmit = (event: SyntheticEvent) =>{
        event.preventDefault();
        if(event.target instanceof HTMLFormElement && !updating){
            if(event.target["0"] instanceof HTMLInputElement){
                const answer = event.target["0"].value;
                event.target["0"].value = "";
                if(answer.trim().toLowerCase() == data.city.name.toLowerCase()){
                    setScoreExpert((prevScore)=>{
                        window.localStorage.setItem("scoreExpert", `${scoreExpert+1}`);
                        return (prevScore+1)});
                    setResponse("Correct!")
                    setHighScoreExpert((prevHighScore)=>{
                        window.localStorage.setItem("highScoreExpert", `${prevHighScore+1}`);
                        return (scoreExpert+1 > prevHighScore? scoreExpert+1:prevHighScore);
                    });
                    setUpdating(true);
                    setTimeout(()=>{
                        fetchData();
                    }, 1500);
                    setStrikes(0);
                    setDisplayText("");
                }else if(strikes < 2){
                    setStrikes(prevStrikes => prevStrikes+1);
                    setDisplayText("");
                    setResponse("Incorrect, try again");
                    setUpdating(true);
                }else{
                    setScoreExpert(()=>{
                        window.localStorage.setItem("scoreExpert", `0`);
                        return (0)
                    });
                    setScoreExpert(0);
                    setStrikes(0);
                    setResponse("You ran out of tries!\n The answer was " +data.city.name);
                    setUpdating(true);
                    setTimeout(()=>{
                        fetchData();
                    }, 1200);
                    setDisplayText("");
                }
                setTimeout(()=>{
                    setUpdating(false);
                    setResponse("");
                }, 1200);
            }

        }
    }

    return(
        <div className="p-12 bg-gradient-to-b from-blue-300 to-green-400 text-center h-screen ">
            <h1 className="text-center text-6xl mt-12 font-semibold text-gray-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
                Guess that City!
            </h1>
            <div className="flex justify-around text-4xl my-4 font-semibold">
                <div className=" bg-white bg-opacity-90 rounded-3xl py-2 px-4">
                    Score: {data.casual? scoreCasual:scoreExpert}
                </div>
                <div className="bg-white bg-opacity-90 rounded-3xl py-2 px-4">
                    Highscore: {data.casual? highScoreCasual:highScoreExpert}
                </div>
            </div>

            <div className="">
                <Card display_text={displayText} url_destination={data.city.href} zIndex="50" game = {true}></Card>
                {data.casual?
                <div className="grid grid-cols-5 grid-rows-1 text-center text-4xl mt-6 gap-8">
                    <button onClick={handleClick} className="text-3xl font-semibold row-start-1 col-start-2 justify-self-end
                       bg-gray-100 w-fit rounded-3xl shadow-2xl px-8 py-3 hover:-translate-y-2 transition-all duration-100">
                        {data.options[random_nums[0]]}
                    </button>
                    <button onClick={handleClick} className="text-3xl font-semibold row-start-1 col-start-3 justify-self-center
                       bg-gray-100 w-fit rounded-3xl shadow-2xl px-8 py-4 hover:-translate-y-2 transition-all duration-100 ">
                        {data.options[random_nums[1]]}
                    </button>
                    <button onClick={handleClick} className="text-3xl font-semibold row-start-1 col-start-4 justify-self-start
                       bg-gray-100 w-fit rounded-3xl shadow-2xl px-8 py-4 hover:-translate-y-2 transition-all duration-100">
                        {data.options[random_nums[2]]}
                    </button>
                </div>
                :
                <div className="text-center text-3xl mt-8">
                    <form  onSubmit={handleSubmit}>
                        <input className="rounded-xl w-[35rem] h-12 border-2 border-black p-8" onChange={handleChange}
                        autoFocus={true}
                        placeholder={"Type here..."}
                        type="text"/>
                    </form>

                </div>
                }
                <div className="text-center text-5xl text-white font-semibold mt-4">
                    {response}
                </div>
            </div>
        </div>
    )
    
    }else{
        return(
            <div className="p-12 h-screen bg-gradient-to-b from-blue-300 to-green-400 flex flex-col align-middle">
                <h1 className="mt-16 text-6xl font-semibold text-gray-800 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)] text-center">
                  Guess that City!
                </h1>
                <span className="text-6xl text-white mt-40 font-bold text-center">
                    Loading...
                </span>
            </div>
        )
    }

}