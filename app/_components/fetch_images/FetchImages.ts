import CityType, { CasualCity, ExpertCity, CityInformation, ImageInformation } from "@/app/_types/Types";
import RandomNumbers from "./helper_functions/RandomNumberGenerator";

export default async function FetchImages(difficulty: "casual" | "expert") {
    
    let data = await fetch("https://api.teleport.org/api/urban_areas/");

    // Response object returns list of cities and API endpoints for specific city information
    const responseObj: CityType = await data.json();

    // Checking if response object after parsing into Json is of the desired structure, if so continue, if not
    // return as undefined and handle laterresponseObj
    // Create three random, unique numbers to retrieve different city names
    const random_city_nums: [number, number, number] = RandomNumbers(responseObj.count);

    // Requesting specific city information using responseObj
    data = await fetch(responseObj._links["ua:item"][random_city_nums[0]].href)
    const city: CityInformation = await data.json();
    data = await fetch(city._links["ua:images"].href);

    // Get image
    const image: ImageInformation = await data.json();

    if(difficulty === "casual"){
        // Ugly indexing ¯\_(ツ)_/¯
        const correct_city: string = responseObj._links["ua:item"][random_city_nums[0]].name;
        const first_incorrect_city: string = responseObj._links["ua:item"][random_city_nums[1]].name;
        const second_incorrect_city: string = responseObj._links["ua:item"][random_city_nums[2]].name;

        // Doing this to randomize the order which the options appear in
        const city_array: [string, string, string] = [
            correct_city, first_incorrect_city, second_incorrect_city
        ];
        const random_option_nums: [number, number, number] = RandomNumbers(3); 

        const cities: CasualCity = {
            casual:true,
            city:{
                name: correct_city,
                href: image.photos[0].image.mobile
            },
            incorrect_cities:{
                city_1:{
                    name:first_incorrect_city,
                },
                city_2:{
                    name:second_incorrect_city,
                }
            },
            options: [city_array[random_option_nums[0]], city_array[random_option_nums[1]], city_array[random_option_nums[2]]]
        }
        return cities
        
    }else{
        const city: ExpertCity = {
            casual:false,
            city:{
                name:responseObj._links["ua:item"][random_city_nums[0]].name,
                href:image.photos[0].image.mobile
            }
        }
        return city
    }
}