export default function Card({city_name, url_destination, zIndex}){

    return (
    <div className = {zIndex}>

      <div className="min-h-fit max-w-fit bg-white rounded-t-2xl pt-0.5 rounded-b-md mx-auto shadow-xl hover:-translate-y-4 hover:z-50 transition-all duration-200">
        <div className="relative flex items-center justify-center overflow-hidden w-44 h-52 rounded-t-2xl mx-6 mt-4">
          <img className = "w-48 h-52 object-cover overflow-hidden hover:scale-125 transition-all duration-300" src={url_destination} alt="" />
        </div>

        <div className='text-center py-4'>
          <span className="font-bold text-2xl">
            {city_name}
          </span>
        </div>

      </div>
    
  </div>)

  

}