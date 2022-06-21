import React, {useState} from 'react'

function Signup({setSigninPopup}) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordCheck: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!Object.values(formData).includes('')) {
      if (formData.password !== formData.passwordCheck) {
        alert ("Your passwords do not match!")
      } else {
        fetch('http://localhost:9292/users', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password
          })
        })
          .then(resp => resp.json())
          .then(data => {
            setSigninPopup(false)
            alert(`Successfully signed up as ${data.username}!`)
          })

        setFormData({
          username: '',
          password: '',
          passwordCheck: ''
        })
      }
    } else {
      alert ("Please enter a username and password!")
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
    <div className="signup absolute w-screen h-screen z-50 bg-black bg-opacity-60 grid justify-center items-center">
      <div className="mb-40 w-96 h-96 bg-gray-800 z-60">
        <form  className="flex flex-col" onSubmit={handleSubmit}>
          <label className="mt-10" htmlFor="username">Username</label>
          <input className="w-48 relative center-rel" type="text" name="username" value={formData.username} onChange={handleChange}/>
          <label className="mt-5" htmlFor="password">Password</label>
          <input className="w-48 relative center-rel" type="password" name="password" value={formData.password} onChange={handleChange}/>
          <label className="mt-5" htmlFor="passwordCheck">Retype Password</label>
          <input className="w-48 relative center-rel" type="password" name="passwordCheck" value={formData.passwordCheck} onChange={handleChange}/>
          <button className="mt-5" type="submit" name="">Submit</button>
        </form>
      <button className='mt-16 bg-red-700 font-bold rounded-2xl h-7 w-7 text-center' onClick={() => setSigninPopup(false)}>X</button>
      </div>
    </div>
  )
}

export default Signup