import '../App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import React, {useState, useEffect, createContext} from 'react';
import Plants from './Plants';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [plants, setPlants] = useState([])
  const [plantsSearch, setPlantsSearch] = useState("")

  // useEffect(() => {
  //   const data = window.localStorage.getItem('PLANTS_LOGGED_IN')
  //   if (data !== null) setLoggedIn(JSON.parse(data))
  // }, [])

  // useEffect(() => {
  //   window.localStorage.setItem('PLANTS_LOGGED_IN', JSON.stringify(loggedIn))
  // }, [loggedIn])

  useEffect(() => {
    fetch('http://localhost:9292/plants')
      .then(resp => resp.json())
      .then(data => setPlants(data))
  }, [])

  const displayPlants = plants.filter((p) => p.name.toLowerCase().includes(plantsSearch.toLowerCase()))

  return (
    <logInContext.Provider value={{loggedIn, setLoggedIn}}>
      <div className="App w-screen h-screen bg-green-300">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants displayPlants={displayPlants} setPlantsSearch={setPlantsSearch}/>}/>
        </Routes>
      </div>
    </logInContext.Provider>
  );
}
export const logInContext = createContext(null)

export default App;
