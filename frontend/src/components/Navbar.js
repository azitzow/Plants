import React, {useState} from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

function Navbar({loggedIn, setLoggedIn}) {
  const [loginPopup, setLoginPopup] = useState(false)
  const [signupPopup, setSignupPopup] = useState(false)

  const handleLogout = () => {
    alert('Logged out!')
    setLoggedIn(false)
  }

  return (
    <div className="navbar flex w-screen">
      {loginPopup && <Login setLoginPopup={setLoginPopup}/>}
      {signupPopup && <Signup setSigninPopup={setSignupPopup}/>}
      <nav className='relative center-rel'>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/plants"> Plants </NavLink>
      </nav>
      <div className="login-logout w-96 h-20 bg-black absolute right-10">
        <button className="login text-white mt-1.5 hover:text-gray-500 active:text-gray-800 select-none" onClick={() => loggedIn ? handleLogout() : setLoginPopup(!loginPopup)}>{loggedIn ? "Logout" : "Login"}</button> <br />
        {!loggedIn && <button className="sign-up text-white mt-3 hover:text-gray-500 active:text-gray-800 select-none" onClick={() => setSignupPopup(!loginPopup)}>Sign up</button>}
      </div>
    </div>
  )
}

export default Navbar