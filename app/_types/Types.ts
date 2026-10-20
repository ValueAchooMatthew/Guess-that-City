// One entry in app/_data/cities.json (built by scripts/build-cities.mjs)
export default interface City{
    name: string,
    // Wikimedia Commons thumbnail
    image: string,
    // Commons file page, which carries the full license and author details
    source: string,
    artist: string,
    license: string
}

export interface PhotoCredit{
    artist: string,
    license: string,
    source: string
}

export interface CasualCity{
    casual: true,
    city:{
        name: string,
        href: string,
        credit: PhotoCredit
    },
    incorrect_cities:{
        city_1:{
            name:string
        }
        city_2:{
            name:string
        }
    }
    options: [string, string, string];
}

export interface ExpertCity{
    casual:false,
    city:{
        name:string,
        href:string,
        credit: PhotoCredit
    }
}
