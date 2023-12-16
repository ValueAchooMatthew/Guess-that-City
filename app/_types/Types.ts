export default interface CityType{

    _links: {
        curies: Array<{
            href:string,
            name:string,
            templated:boolean;
        }>,
        self:{
            href:string;
        },
        "ua:item": Array<{
            href:string,
            name:string;
        }>;
    };
    count: number;
}

export interface CasualCity{
    casual: true,
    city:{
        name: string,
        href: string
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
        href:string
    }
}

export interface CityInformation{

    _links:{
        "ua:images":{
            href:string;
        },
    },
    // Using indexer because only relevant property on this type is images to retrieve image info
}

export interface ImageInformation{
    photos:Array<{
        attribution:{
            license: string,
            photographer:string,
            site:string,
            source:string
        },
        image:{
            mobile:string,
            web:string
        }
    }>,

}

export interface ButtonText{

    outerText: string;

}






