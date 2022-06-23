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
        },
        body: ""
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        console.log(user.user_plants)
      })
    }
  }

  const slider = (e) => {

  }

  const varySunlight = (plant) => {
    const min = Math.ceil(30);
    const max = Math.floor(-30);
    const rand = Math.floor(Math.random() * (max - min) + min)
    return plant.sunlight_exposure + rand
  }

  return (
    <div className='Garden absolute bg-red-400 mt-5 h-5/6 w-5/6 center-rel rounded-3xl overflow-auto select-none'>
      <img src={watering ? deactivateCan : inactiveCan} alt="" className='w-20 absolute cursor-pointer right-10 top-10' onClick={toggleWatering}/>
      <div className="garden-display h-4/5 w-4/5 flex flex-wrap justify-center absolute center-rel mt-40">
        {(user.user_plants.map(plant => {
          const plantInfo = plants[plant.plant_id - 1]
          const interval = plantInfo.watering_interval * 604800
          const lastTime = plant.time_since_watered
          const currentTime = Math.floor(new Date() / 1000)
          const needsWater =  lastTime + interval  <= currentTime
          const nextWatering = lastTime + interval
          return (<div key={plant.id} id={plant.id} className={`mx-7 w-52 bg-slate-700 h-36 my-2 flex flex-col relative ${watering && "cursor-pointer"}`} onClick={handleWatering}>
                    <p className='bg-slate-700 pointer-events-none'>{plantInfo.name}</p>
                    <p key={plant.id} className={`pointer-events-none`}>{`This plant ${needsWater ? "needs" : "does not need"} water${!needsWater && ` for another ${howLongTillWater(nextWatering, currentTime)}`}!`}</p>
                    <input type="range" name={plant.id} min='0' max='100' className='transition-all w-40 relative center-rel' onChange={slider}/>
                    <p>{plant.sunlight_exposure}</p>
                  </div>)
        }))}
      </div>
      <h1 className='text-5xl mt-3'>{`${user.username.replace(/^(.)|\s+(.)/g, c => c.toUpperCase())}'s Garden`}</h1>
      <button onClick={() => setAddPlant(!addPlant)} className="mt-5 text-center text-indigo-400 font-bold rounded py-2 w-2/12 focus:outline-none bg-gray-900 border-2 border-indigo-400">{addPlant ? "Close plants menu" : "Add plants to your garden!"}</button>
      <div className={`add-plants z-50 overflow-auto transition-all duration-1000 bg-slate-600 absolute rounded-lg h-80 w-80 ${addPlant ? "opacity-100 left-1" : "opacity-0 -left-3/4"}`}>
        <input type="text" className='mt-5' value={addPlants} onChange={(e) => setAddPlants(e.target.value)}/>
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