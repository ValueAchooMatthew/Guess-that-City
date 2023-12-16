
export default function RandomNumbers(size: number): [number, number, number]{
    // Generating random number for the correct city in casual gamemode
    const random_1: number = Math.floor(Math.random() * size);
    // Generating two more random numbers for incorrect guesses and ensuring they are different from the first random number
    let random_2:number = random_1;
    let random_3:number = random_1;
    while(random_2 == random_3 || random_1 == random_2 || random_1 == random_3){
        random_2 = Math.floor(Math.random() *size);
        random_3 = Math.floor(Math.random() *size);
    }
    // Always assuming random_1 is the chosen city
    return[random_1, random_2, random_3];
}
