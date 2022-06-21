import React, { useState } from 'react'

// destructure handleAdd here
function NewPlantForm() {
  const [ formData, setFormData ] = useState({
    name: "",
    dec: "",
    img: "",
    waterInterval: 0,
    sunlight: 0
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

// check that the values are not empty, this prevents user from skipping an input field
    if (!Object.values(formData).includes("")) {
      fetch("http://localhost:9292/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((newPlant) => 
        console.log("handleAdd Goes here ", newPlant))
        .then(
          setFormData({
            name: "",
            dec: "",
            img: "",
            waterInterval: 0,
            sunlight: 0
          })
        ) 
    }
  }

  return (
    <div>
      <h1> Add a New Plant!</h1>
      <form>
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
        name="waterInterval"
        placeholder="Water Interval"
        onChange={ handleChange }
        value={ formData.waterInterval }
        ></input>

        <label htmlFor="sunlight">Sunlight Exposure</label>

        <input
        name="sunlight"
        placeholder="Sunlight Exposure"
        onChange={ handleChange }
        value={ formData.sunlight }
        ></input>

      </form>
    </div>
  )
}

export default NewPlantForm