import React, {useState, useContext} from 'react'
import {logInContext} from "./App"

function Login({setLoginPopup}) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const {setLoggedIn} = useContext(logInContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    if (Object.values(formData).includes('')) {
      alert ("Please fill out all feilds.")
    } else {
      fetch(`http://localhost:9292/users/${formData.username}/${formData.password}`)
        .then(resp => resp.json())
        .then(data => {
          if (data[0]) {
            alert("Logged in!")
            setFormData({
              username: '',
              password: ''
            })
            setLoggedIn(true)
            setLoginPopup(false)
          } else {
            alert("Incorrect username or password.")
          }
        })
    }
  }

  const handleChange = (e) => {
    if (!e.target.value.includes(" ")) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }
  return (
    <div className="login absolute w-screen h-screen z-50 bg-black bg-opacity-60 grid justify-center items-center">
      <div className="mb-40 w-96 h-96 bg-gray-800 z-60">
        <form  className="flex flex-col" onSubmit={handleSubmit}>
          <label className="mt-10" htmlFor="username">Username</label>
          <input className="w-48 relative center-rel" type="text" name="username" value={formData.username} onChange={handleChange}/>
          <label className="mt-5" htmlFor="password">Password</label>
          <input className="w-48 relative center-rel" type="text" name="password" value={formData.password} onChange={handleChange}/>
          <button className="mt-3" type="submit" name="">Submit</button>
        </form>
      <button className='mt-36 bg-red-700 font-bold rounded-2xl h-7 w-7 text-center' onClick={() => setLoginPopup(false)}>X</button>
      </div>
    </div>
  )
}

export default Login