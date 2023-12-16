"use client";

import { useEffect, useState } from "react";

import CityType, { CasualCity, ExpertCity } from "@/app/_types/Types";
import FetchImages from "../fetch_images/FetchImages";
import Card from "@/app/_components/Card";

export default function Guesser({difficulty}: {difficulty: "casual" | "expert"}){

    const [data, setData] = useState<CasualCity | ExpertCity | undefined>()

    useEffect(()=>{
        const response = async ()=>{
            const data: CasualCity | ExpertCity = await FetchImages("casual")
            setData(data);
        }
        // console.log("fired")
        response();
    }, [])

    return(
        <>
            {data?
                <div className="py-48">
                    <Card city_name={""} url_destination={data.city.href} zIndex="50"></Card>
                    {difficulty == "casual"?
                    <div>
                        casual
                    </div>
                    :
                    <div>
                        Expert
                    </div>
                        }
                </div>
                :
                <></>
            }
        </>
    )
    
}