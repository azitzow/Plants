import React, { useState, useContext } from 'react'
import {logInContext} from "./App"
import FadeIn from 'react-fade-in';

// destructure handleAdd here
function NewPlantForm() {
  const [ formData, setFormData ] = useState({
    name: "",
    dec: "",
    img: "",
    waterInterval: "",
    sunlight: ""
  })

  const {setPlants} = useContext(logInContext)

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    if (name === "sunlight" || name === "waterInterval") {
      if ((/^[0-9]*$/).test(value)) {
        setFormData({ ...formData, [name]: value })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
    console.log(formData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!Object.values(formData).includes("")) {
      fetch("http://localhost:9292/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          dec: formData.dec,
          img: formData.img,
          watering_interval: formData.waterInterval,
          sunlight: formData.sunlight
        }),
      })
        .then((response) => response.json())
        .then((newPlant) => setPlants(plants => plants.push(newPlant)))
        .then(
          setFormData({
            name: "",
            dec: "",
            img: "",
            waterInterval: "",
            sunlight: ""
          })
        )
    } else {
      alert("Please fill out all the boxes!")
    }
  }

  return (
    <FadeIn>
      <div>
        <h1 className="newPlantHeader"> 🌱 Add a New Plant! 🪴</h1>
        <form onSubmit={handleSubmit} className="newPlantForm">

          <label htmlFor="name"> Name </label> <br/>
          <input
            className="newPlantInput"
            name="name"
            placeholder=" Name "
            onChange={ handleChange }
            value={ formData.name }
          ></input> <br/>

          <label htmlFor="dec"> Description </label><br/>
          <input
            className="newPlantInput"
            name="dec"
            placeholder=" Short Description "
            onChange={ handleChange }
            value={ formData.dec }
          ></input><br/>

          <label htmlFor="image"> Image </label><br/>
          <input
            className="newPlantInput"
            name="img"
            placeholder=" Image URL "
            onChange={ handleChange }
            value={ formData.img }
          ></input><br/>

          <label htmlFor="water interval"> Water Interval </label> <br/>
          <select id="WaterInterval" name="waterInterval">
            <option value="1"> Every 1 Week 🗓️  </option>
            <option value="2"> Every 2 Weeks 🗓️  </option>
            <option value="3"> Every 3 Weeks 🗓️  </option>
            <option value="4"> Every 4 Weeks 🗓️  </option>
            <option value="5"> Every 5 Weeks 🗓️  </option>
            <option value="6"> Every 6 Weeks 🗓️  </option>
            <option value="7"> Every 7 Weeks 🗓️  </option>
            <option value="8"> Every 8 Weeks 🗓️  </option>
            <option value="9"> Every 9 Weeks 🗓️  </option>
            <option value="10"> Every 10 Weeks 🗓️  </option>
          </select><br/>

          <label htmlFor="sunlight"> Sunlight Exposure </label><br/>
          <select id="sunlightExposure" name="sunlight">
            <option value="0"> 0 - Indirect Low 🔅 </option>
            <option value="1"> 1 - Indirect Low-Medium 🔅 </option>
            <option value="2"> 2 - Indirect Medium 🔆</option>
            <option value="3"> 3 - Indirect High ☀️ </option>
            <option value="4"> 4 - Indirect Full 🌞 </option>
            <option value="5"> 5 - Direct Low 🔅 </option>
            <option value="6"> 6 - Direct Low-Medium 🔅 </option>
            <option value="7"> 7 - Direct Medium 🔆 </option>
            <option value="8"> 8 - Direct Medium-High 🔆 </option>
            <option value="9"> 9 - Direct High ☀️ </option>
            <option value="10"> 10 - Direct Full 🌞 </option>
          </select><br/>

          <input type="submit" className='cursor-pointer'/>
        </form>
      </div>
    </FadeIn>
  )
}

export default NewPlantForm