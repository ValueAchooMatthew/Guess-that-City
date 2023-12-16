import CityType, { CasualCity, ExpertCity, CityInformation, ImageInformation } from "@/app/_types/Types";
import RandomNumbers from "./helper_functions/RandomNumberGenerator";

export default async function FetchImages(difficulty: "casual" | "expert") {
    
    let data = await fetch("https://api.teleport.org/api/urban_areas/");

    // Response object returns list of cities and API endpoints for specific city information
    const responseObj: CityType = await data.json();

    // Checking if response object after parsing into Json is of the desired structure, if so continue, if not
    // return as undefined and handle later
    const random_nums: [number, number, number] = RandomNumbers(responseObj.count)

    // Requesting specific city information using responseObj
    data = await fetch(responseObj._links["ua:item"][random_nums[0]].href)
    const city: CityInformation = await data.json();
    data = await fetch(city._links["ua:images"].href);

    // Get image
    const image: ImageInformation = await data.json();
    if(difficulty === "casual"){
        const cities: CasualCity = {
            casual:true,
            city:{
                // Ugly indexing ¯\_(ツ)_/¯
                name: responseObj._links["ua:item"][random_nums[0]].name,
                href: image.photos[0].image.mobile
            },
            incorrect_cities:{
                city_1:{
                    name:responseObj._links["ua:item"][random_nums[1]].name,
                },
                city_2:{
                    name:responseObj._links["ua:item"][random_nums[2]].name,
                }
            },
            options: [responseObj._links["ua:item"][random_nums[0]].name,
            responseObj._links["ua:item"][random_nums[1]].name,
            responseObj._links["ua:item"][random_nums[2]].name,]
        }
        return cities
        
    }else{
        const city: ExpertCity = {
            casual:false,
            city:{
                name:responseObj._links["ua:item"][random_nums[0]].name,
                href:image.photos[0].image.mobile
            }
        }
        return city
    }
}