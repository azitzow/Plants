import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import AccountSettings from './AccountSettings'

function Navbar({loggedIn, setLoggedIn, user, setUser, watering}) {
  const [loginPopup, setLoginPopup] = useState(false)
  const [signupPopup, setSignupPopup] = useState(false)
  const [accountSettingsPopup, setAccountSettingsPopup] = useState(false)

  const handleLogout = () => {
    alert('Logged out!')
    setLoggedIn(false)
    setUser({})
  }

  return (
    <div className="navbar flex w-screen">
      {loginPopup && <Login setLoginPopup={setLoginPopup}/>}
      {signupPopup && <Signup setSigninPopup={setSignupPopup}/>}
      {accountSettingsPopup && <AccountSettings setAccountSettingsPopup={setAccountSettingsPopup}/>}
      <nav className='relative center-rel'>
        <ul className='my-5 text-2xl'>
          <li className='inline-block mx-5 cursor-pointer'>{!watering ? <NavLink to="/"> Home </NavLink> : "Home"}</li>
          <li className='inline-block mx-5 cursor-pointer'>{!watering ?<NavLink to="/plants"> Plants </NavLink>: "Plants"}</li>
          {loggedIn && <li className='inline-block mx-5 cursor-pointer'><NavLink to="/garden"> Your Garden </NavLink></li>}
        </ul>
      </nav>
      <div className="login-logout w-96 h-20 bg-black absolute right-10">
      {loggedIn && <p className='text-white'>{`Welcome, ${user.username}`}</p>}
        <button className="login text-white mt-1.5 hover:text-gray-500 active:text-gray-800 select-none" onClick={() => loggedIn ? handleLogout() : setLoginPopup(!loginPopup)}>{loggedIn ? "Logout" : "Login"}</button> <br />
        {!loggedIn && <button className="sign-up text-white mt-3 hover:text-gray-500 active:text-gray-800 select-none" onClick={() => setSignupPopup(!loginPopup)}>Sign up</button>}
        {loggedIn && <button className='text-white hover:text-gray-500 active:text-gray-800 select-none' onClick={() => setAccountSettingsPopup(!accountSettingsPopup)}>Account Settings</button>}
      </div>
    </div>
  )
}

export default Navbar