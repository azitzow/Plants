import React, { useState, useContext } from 'react'
import {logInContext} from "./App"

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
    <div>
      <h1> Add a New Plant!</h1>
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="name">Name</label>
       
        <input
          name="name"
          placeholder="Plant Name"
          onChange={ handleChange }
          value={ formData.name }
        ></input>
       
        <label htmlFor="dec">Description</label>
       
        <input
          name="dec"
          placeholder="Plant Description"
          onChange={ handleChange }
          value={ formData.dec }
        ></input>
        
        <label htmlFor="image">Image</label>

        <input
          name="img"
          placeholder="Image URL"
          onChange={ handleChange }
          value={ formData.img }
        ></input>

        <label htmlFor="water interval">Water Interval</label>

        <input
          type="text"
          name="waterInterval"
          placeholder="Water Interval"
          onChange={ handleChange }
          value={ formData.waterInterval }
        ></input>

        <label htmlFor="sunlight">Sunlight Exposure</label>

        <input
          type="text"
          name="sunlight"
          placeholder="Sunlight Exposure"
          onChange={ handleChange }
          value={ formData.sunlight }
        ></input>
        <input type="submit" className='cursor-pointer'/>
      </form>
    </div>
  )
}

export default NewPlantForm