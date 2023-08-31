export default async function City(){


    let cities = await fetch("https://api.teleport.org/api/urban_areas/")
    cities = await cities.json()
    let city = cities._links["ua:item"][Math.floor(Math.random() * cities.count)]
    city = await fetch(`${city.href}`)
    city = await city.json()
    city = await fetch(city._links["ua:images"].href)
    city = await city.json()
    console.log(city.photos[0].image.mobile)
    return(

        <div className="min-h-fit max-w-fit bg-white rounded-t-2xl pt-4 rounded-b-md mx-auto shadow-2xl">
            <div className="relative flex items-center justify-center overflow-hidden w-80 h-96 rounded-t-2xl mx-6 mt-4">
              <img className = "w-72 h-96 object-cover overflow-hidden hover:scale-125 transition-all duration-150" src={city.photos[0].image.mobile} alt="" />
            </div>

            <div className='text-center py-4'>
              <span className="font-bold text-2xl">
                {`???`}
              </span>
            </div>

      </div>

    )

}