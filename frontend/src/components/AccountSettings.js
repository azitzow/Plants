import React, {useState, useContext} from 'react'
import {logInContext} from "./App"

function AccountSettings({setAccountSettingsPopup}) {
  const [confirm, setConfirm] = useState(false)
  const [newPass, setNewPass] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  const {setLoggedIn, setUser, user} = useContext(logInContext)
  
  const handleDeleteAccount = () => {
    fetch(`http://localhost:9292/users/${user.id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setLoggedIn(false)
        setUser({})
        setAccountSettingsPopup(false)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPassword && newPassword !== user.password && newPassword === checkPassword) {
      fetch(`http://localhost:9292/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({password: newPassword})
      })
        .then(r => r.json())
        .then(data => {
          alert("Password changed!")
          setNewPass(false)
          setNewPassword('')
          setUser(data)
        })
    } else if (newPassword === user.password) {
      alert("New password must not be the same as your old password!")
    } else if (newPassword !== checkPassword) {
      alert("Passwords do not match!")
    } else {
      alert("Please enter a new password!")
    }
  }

  return (
    <div className="login absolute w-screen h-screen z-50 bg-black bg-opacity-60 grid justify-center items-center">
      <div className="mb-40 w-96 h-96 bg-gray-800 z-60 flex flex-col items-center">
        {!confirm ? (
          <button className="select-none w-80 h-12 px-6 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800 active:bg-red-900 mt-11" onClick={() => setConfirm(true)}>Delete Account</button>
        ) : (
          <button className="select-none w-60 h-12 px-6 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800 active:bg-red-900 mt-11" onClick={() => handleDeleteAccount()}>Are You Sure?</button>
        )}
        {!newPass ? (
          <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 my-5 active:bg-indigo-900" onClick={() => setNewPass(true)}>Change Password</button>
        ) : (
          <form onSubmit={handleSubmit} className='mt-2 flex flex-col'>
            <label className='text-white'>Enter Your New Password:</label>
            <input type="password" onChange={(e) => setNewPassword(e.target.value)} value={newPassword}/>
            <label className='text-white'>Renter Your New Password:</label>
            <input type="password" onChange={(e) => setCheckPassword(e.target.value)} value={checkPassword}/>
            <button className='text-white bg-indigo-700 rounded-lg mt-4 hover:bg-indigo-800 active:bg-indigo-900'>Submit New Password</button>
          </form>
        )}
        <button className={`bg-red-700 font-bold rounded-2xl h-7 w-7 text-center text-white ${!newPass ? 'mt-40' : 'mt-24'} `} onClick={() => setAccountSettingsPopup(false)}>X</button>
      </div>
    </div>
  )
}

export default AccountSettings