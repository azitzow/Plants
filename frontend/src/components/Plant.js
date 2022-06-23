import React, {useState} from 'react'

function Plant({plant}) {
  const [details, setDetails] = useState(false)

  const handleClick = () => {
    setDetails(!details)
  }

  return (
    <div onClick={handleClick} className={`bg-red-100 shadow-xl shadow-black rounded-lg w-64 duration-500 h-40 ${details ? "scale-150 z-50" : "hover:scale-105"}  m-10 transition-transform select-none flex flex-col cursor-pointer text-sm mb-24`}>
      <h1>{plant.name}</h1>
        <p className={`transition-all w-80 right-9 relative text-md scale-50 h-0 overflow-visible duration-500 ${details ? "opacity-100 scale-50" : "opacity-0 scale-0"}`}>{plant.dec}</p>
        <p className='transition-all w-80 right-6 relative text-sm scale-75 h-0 overflow-visible top-20'>Sunlight: {plant.sunlight}</p>
        <p className='transition-all w-80 -right-3 relative text-sm scale-75 h-0 overflow-visible top-24'>Water: Once every {plant.watering_interval} week{plant.watering_interval >= 2 && "s"}</p>
      <img src={plant.img} alt={plant.name} className={`relative transition-all rounded-lg duration-500 ${details ? "scale-50 right-1/3 top-1 shadow-sm shadow-black" : "scale-90 right-1 top-1"}`}/>
    </div>
  )
}

export default Plant