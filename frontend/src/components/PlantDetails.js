import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PlantDetails () {
  const [isLoaded, setIsLoaded] = useState(false)
  const [plants, setPlants] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/user_plants/${id}`)
      .then((res) => res.json())
      .then((plants) => {
        setIsLoaded(true)
        setPlants(plants)
      })
  }, [id])

  if (!isLoaded) return <h2>Loading...</h2>;

  const { name, dec, img, wateringInterval, sunlight } = plants

  return (
    <section>
     <div>
      <h2> Plant </h2>
      <div>
        <img src={ img } alt={ name }/>
        <div>
          <button
            onClick={ handleDeleteClick }
          > 🗑️ </button>
        </div>
        <div>
          <h3> Name: { name }</h3>
          <p>
            Description: { dec } <br/>
            Watering Interval: { wateringInterval } <br/>
            Sunlight Requirements: { sunlight }
          </p>
        </div>
      </div>
     </div>
    </section>
  )

}

export default PlantDetails