import '../App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import React, {useState, useEffect, createContext, useRef} from 'react';
import Plants from './Plants';
import Garden from './Garden';
import activeCan from '../wateringCanActive.png'
import NewPlantForm from './NewPlantForm'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [plants, setPlants] = useState([])
  const [plantsSearch, setPlantsSearch] = useState("")
  const [addPlants, setAddPlants] = useState("")
  const [user, setUser] = useState({})
  const [watering, setWatering] = useState(false)
  const cursorDiv = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:9292/plants')
      .then(resp => resp.json())
      .then(data => setPlants(data))
  }, [])

  useEffect(() => {
    if (loggedIn===true) {
      fetch(`http://localhost:9292/users/${user.id}`)
        .then(resp => resp.json())
        .then(data => setUser(data))
    }
  }, [loggedIn])

  useEffect(() => {
    if (!loggedIn) navigate('/', {replace: true})
  }, [loggedIn])

  const activeCanFollow = (e) => {
    if (cursorDiv.current) {
      cursorDiv.current.style.left = `${e.pageX-52}px`
      cursorDiv.current.style.top = `${e.pageY-30}px`
    }
  }

  window.addEventListener('mousemove', activeCanFollow)
  document.body.style.cursor = `${watering ? 'none' : 'default'}`

  const displayPlants = plants.filter((p) => p.name.toLowerCase().includes(plantsSearch.toLowerCase()))
  const displayAddPlants = plants.filter((p) => p.name.toLowerCase().includes(addPlants.toLowerCase()))

  return (
    <logInContext.Provider value={{loggedIn, setLoggedIn, user, setUser, setPlants}}>
      <img src={activeCan} alt="" ref={cursorDiv} className={`${watering ? "block" : "hidden"} w-20 absolute z-50 pointer-events-none`}/>
      <div className="App w-screen h-screen bg-green-300">
        <Navbar watering={watering} loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants loggedIn={loggedIn} displayPlants={displayPlants} setPlantsSearch={setPlantsSearch}/>}/>
          {loggedIn && <Route path="/garden" element={<Garden setWatering={setWatering} watering={watering} setUser={setUser} user={user} displayAddPlants={displayAddPlants} addPlants={addPlants} setAddPlants={setAddPlants} plants={plants}/>}></Route>}
          {loggedIn && <Route path="/plants/newplant" element={<NewPlantForm />}/>}
        </Routes>
      </div>
    </logInContext.Provider>
  );
}
export const logInContext = createContext(null)

export default App;
