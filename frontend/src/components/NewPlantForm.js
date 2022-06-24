import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import {logInContext} from "./App"
import FadeIn from 'react-fade-in';

// destructure handleAdd here
function NewPlantForm() {
  const navigate = useNavigate()
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
      setFormData({ ...formData, [name]: value })
    } else {
      setFormData({ ...formData, [name]: value })
    }
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
        .then((newPlant) => setPlants(plants => [...plants, newPlant]))
        .then(data => {
          alert('Plant added!')
          navigate('/plants', {replace: true})
        })
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
        <h1 className="newPlantHeader"> 🌱 Add a New Plant! 🪴</h1> <br/>
        <form onSubmit={handleSubmit} className="newPlantForm">

          <div className='relative center-rel w-3/5 text-left'>
            <label className="p1 text-emerald-800" htmlFor="name"> Name </label> <br/>
            <input
              className="newPlantInput"
              name="name"
              placeholder=" Name "
              onChange={ handleChange }
              value={ formData.name }
            ></input> <br/>
          </div>

          <div className='relative center-rel w-3/5 text-left'>
            <label className="p-1 text-emerald-900" htmlFor="dec"> Description </label><br/>
            <input
              className="newPlantInput"
              name="dec"
              placeholder=" Short Description "
              onChange={ handleChange }
              value={ formData.dec }
            ></input><br/>
          </div>
          
          <div className='relative center-rel w-3/5 text-left'>
            <label className="p-1 text-emerald-900" htmlFor="image"> Image </label><br/>
            <input
              className="newPlantInput"
              name="img"
              placeholder=" Image URL "
              onChange={ handleChange }
              value={ formData.img }
            ></input><br/>
          </div>

          <div className='relative center-rel w-3/5 text-left'>
            <label className="p-1 text-emerald-900" htmlFor="water interval"> Water Interval </label> <br/>
            <select id="WaterInterval" name="waterInterval" onChange={handleChange}>
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
          </div>

          <div className='relative center-rel w-3/5 text-left'>
            <label className="p-1 text-emerald-900" htmlFor="sunlight"> Sunlight Exposure </label><br/>
            <select id="sunlightExposure" name="sunlight" onChange={handleChange}>
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
          </div>

          <div className='relative center-rel w-3/5 text-left'>
            <input type="submit" className='cursor-pointer relative top-4'/>
          </div>
        </form>
      </div>
    </FadeIn>
  )
}

export default NewPlantForm