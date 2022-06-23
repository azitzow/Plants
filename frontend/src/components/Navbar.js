import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import AccountSettings from './AccountSettings'
import FadeIn from 'react-fade-in';

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
    <div className="navbar relative flex flex-row w-screen bg-green-900">
      {loginPopup && <Login setLoginPopup={setLoginPopup}/>}
      {signupPopup && <Signup setSigninPopup={setSignupPopup}/>}
      {accountSettingsPopup && <AccountSettings setAccountSettingsPopup={setAccountSettingsPopup}/>}
      <div className='bg-white mb-5 rounded-br-3xl transition-all test'>
        <h1 className={`transition-all relative overflow-visible text-6xl h-0 font-mono scale-150 top-4 pointer-events-none`}>PLANT</h1>
        <nav className='mt-24 z-50'>
          <ul className='my-5 text-2xl select-none'>
            <li className='transition-all inline-block mx-5 cursor-pointer rounde w-40 border-b-4 border-green-600 hover:bg-green-200 rounded-t-xl'>{!watering ? <NavLink to="/" style={{display: "inline-block", width: "100%", height: "100%"}}> Home </NavLink> : "Home"}</li>
            <li className='transition-all inline-block mx-5 cursor-pointer rounde w-40 border-b-4 border-green-600 hover:bg-green-200 rounded-t-xl'>{!watering ?<NavLink to="/plants" style={{display: "inline-block", width: "100%", height: "100%"}}> Plants </NavLink>: "Plants"}</li>
            {loggedIn && <li className='transition-all inline-block mx-5 cursor-pointer rounde w-40 border-b-4 border-green-600 hover:bg-green-200 rounded-t-xl'><FadeIn><NavLink to="/garden" style={{display: "inline-block", width: "100%", height: "100%"}}> Your Garden </NavLink></FadeIn></li>}
          </ul>
        </nav>
      </div>
      <div className="login-logout w-96 h-36 bg-green-900 absolute right-0">
        <br />
        {loggedIn && <p className='text-white'>{`Welcome, ${user.username}`}</p>}
        <button className="mt-2 bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-600 rounded" onClick={() => loggedIn ? handleLogout() : setLoginPopup(!loginPopup)}>{loggedIn ? "Logout" : "Login"}</button> <br />
        {!loggedIn && <button className="mt-2 bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-600 rounded" onClick={() => setSignupPopup(!loginPopup)}>Sign up</button>}
        {loggedIn && <button className='mt-2 bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-800 hover:border-green-600 rounded' onClick={() => setAccountSettingsPopup(!accountSettingsPopup)}>Account Settings</button>}
      </div>
    </div>
  )
}

export default Navbar