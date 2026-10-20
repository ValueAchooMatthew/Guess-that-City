import City, { CasualCity, ExpertCity } from "@/app/_types/Types";
import cities from "@/app/_data/cities.json";
import RandomNumbers from "./helper_functions/RandomNumberGenerator";

// Cities and photos used to come from the Teleport API, which has shut down. They now come from
// app/_data/cities.json (Wikimedia Commons photos, rebuilt with scripts/build-cities.mjs), so the
// game no longer depends on an outside API. Still async so the game page can keep awaiting it.
export default async function FetchImages(difficulty: "casual" | "expert") {

    const city_list: City[] = cities;

    // Create three random, unique numbers to pick the correct city and two incorrect ones
    const random_city_nums: [number, number, number] = RandomNumbers(city_list.length);
    const correct_city: City = city_list[random_city_nums[0]];

    const city = {
        name: correct_city.name,
        href: correct_city.image,
        credit: {
            artist: correct_city.artist,
            license: correct_city.license,
            source: correct_city.source
        }
    };

    if(difficulty === "casual"){
        const first_incorrect_city: string = city_list[random_city_nums[1]].name;
        const second_incorrect_city: string = city_list[random_city_nums[2]].name;

        // Doing this to randomize the order which the options appear in
        const city_array: [string, string, string] = [
            correct_city.name, first_incorrect_city, second_incorrect_city
        ];
        const random_option_nums: [number, number, number] = RandomNumbers(3);

        const casual_city: CasualCity = {
            casual:true,
            city,
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
        return casual_city

    }else{
        const expert_city: ExpertCity = {
            casual:false,
            city
        }
        return expert_city
    }
}
