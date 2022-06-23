import React, {useState} from 'react'
import inactiveCan from '../wateringCanInactive.png'
import deactivateCan from '../deactivateWateringCan.png'

function Garden({setUser, user, displayAddPlants, addPlants, setAddPlants, plants, watering, setWatering}) {
  const [addPlant, setAddPlant] = useState(false)
  const [sliders, setSliders] = useState({})

  const handleClick = (e) => {
    fetch('http://localhost:9292/user_plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({user_id: user.id, plant_id: e.target.name})
    })
      .then(resp => resp.json())
      .then(data => console.log(data))

    fetch(`http://localhost:9292/users/${user.id}`)
      .then(resp => resp.json())
      .then(data => setUser(data))
  }

  const howLongTillWater = (futureTime, currentTime) => {
    const dif = futureTime - (currentTime)
    if (dif >= 604800) {
      const time = Math.floor(dif/604800)
      return `${(time > 1) ? `${time} weeks` : "week"}`
    } else {
      const time = Math.floor(dif/86400)
      return `${(time > 1) ? `${time} days` : "day"}`
    }
  }

  const toggleWatering = () => {
    setWatering(!watering)
  }

  const handleWatering = (e) => {
    if (watering) {
      fetch(`http://localhost:9292/user_plants/${e.target.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(data => setUser({...user, user_plants: data}))
    }
  }

  const changeSlider = (e, plantId, sunlight) => {
    const slider = document.querySelector(`input[name='${e.target.name}']`)
    const value = e.target.value
    const dif = Math.abs((sunlight*10+5) - value)
    slider.style.accentColor = colorGetter(value, sunlight)
    setSliders({...sliders, [plantId]:value})
  }

  const colorGetter = (value, sunlight) => {
    const dif = Math.abs((sunlight*10+5) - value)
    const color = `rgb(${dif > 10 ? `${3 * (dif==0?10:dif)}, 0, 0` : `0, ${200/(dif==0?1:dif)}, 0`})`
    return color
  }

  const submitSlider = (e) => {
    const value = e.target.value
    fetch(`http://localhost:9292/user_plants/${e.target.name}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sunlight_exposure: Math.floor(value/10)
        })
      })
      .then(resp => resp.json())
      .then(data => setUser({...user, user_plants: data}))
  }

  
  return (
    <div className='Garden absolute bg-red-400 mt-5 h-5/6 w-5/6 center-rel rounded-3xl overflow-auto select-none'>
      <img src={watering ? deactivateCan : inactiveCan} alt="" className={`w-20 absolute ${watering ? 'cursor-none' : 'cursor-pointer'}  right-10 top-10`} onClick={toggleWatering}/>
      <div className="garden-display h-4/5 w-4/5 flex flex-wrap justify-center absolute center-rel mt-40">
        {(user.user_plants.map(plant => {
          const plantInfo = plants[plant.plant_id - 1]
          const interval = plantInfo.watering_interval * 604800
          const lastTime = plant.time_since_watered
          const currentTime = Math.floor(new Date() / 1000)
          const nextWatering = lastTime + interval
          const wateringDif = currentTime - lastTime
          const wateredToday = wateringDif < 86400 
          const needsWater =  nextWatering  <= currentTime
          const sunlight = plantInfo.sunlight
          const plantId = plant.id

          console.log(wateredToday)
          
          return (<div key={plantId} id={plantId} className={`mx-7 w-52 bg-slate-700 h-36 my-2 flex flex-col relative transition-all duration-75 ${watering ? 'cursor-none hover:scale-105 active:scale-100' : 'cursor-auto'}`} onClick={handleWatering}>
                    <p className='bg-slate-700 pointer-events-none'>{plantInfo.name}</p>
                    <p key={plantId} className={`pointer-events-none`}>
                      {`This plant ${needsWater ? "needs" : "does not need"} water${!needsWater && ` for another ${howLongTillWater(nextWatering-1, currentTime)}`}!`}
                    </p>
                    <input type="range" 
                    name={plantId} 
                    min='0' 
                    max='100' 
                    className={`transition-all duration-75 w-40 relative center-rel ${watering && 'pointer-events-none'}`}
                    value={sliders[plantId] || plant.sunlight_exposure*10 + 5} 
                    onChange={(e) => changeSlider(e, plantId, sunlight)} 
                    onMouseUp={submitSlider} 
                    style={{accentColor: colorGetter(plant.sunlight_exposure*10+5, sunlight)}}/>
                  </div>)
        }))}
      </div>
      <h1 className='text-5xl mt-3'>{`${user.username.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())}'s Garden`}</h1>
      <button onClick={() => setAddPlant(!addPlant)} className={`${watering && 'pointer-events-none'} mt-5 text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400`}>
        {addPlant ? "Close plants menu" : "Add plants to your garden!"}
      </button>
      <div className={`add-plants z-50 overflow-auto transition-all duration-1000 bg-slate-600 absolute rounded-lg h-80 w-80 ${addPlant ? "opacity-100 left-1" : "opacity-0 -left-3/4"}`}>
        <input type="text" className={`mt-5`} value={addPlants} onChange={(e) => setAddPlants(e.target.value)}/>
        {displayAddPlants.map(plant => (
          <div key={plant.id} className="bg-green-300 w-5/6 h-5 ml-6 my-2 text-left border-2 rounded-md border-green-400">
            <p className='inline w-30 text-sm border-transparent absolute'>{`${plant.name}`}</p> <button name={plant.id} className='absolute right-10 text-sm' onClick={handleClick}>Add</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Garden