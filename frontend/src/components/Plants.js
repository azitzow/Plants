import React, {useState} from 'react'
import Plant from './Plant'
import { NavLink } from 'react-router-dom'
import FadeIn from 'react-fade-in';

function Plants({displayPlants, setPlantsSearch, loggedIn}) {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
    setPlantsSearch(e.target.value)
  }



  return (
    <FadeIn className='h-full' childClassName='h-full' >
      <div className='Plants h-full'>
        <label className='text-lg h-0 overflow-visible'>Search: </label>
        <input type="text" name="search" value={search} onChange={handleChange} className="mb-2 border-b-green-600 border-b-4 border-l-transparent border-l-8 border-r-transparent border-r-8 hover:bg-green-200 outline-none focus:bg-green-100 transition-all rounded-xl"/>
        {loggedIn && <NavLink to="/plants/newplant"><button className='inline-block px-6 py-2.5 mt-4 ml-6 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out z-50'>Add a new plant</button></NavLink>}
          <div className="flex flex-wrap justify-center rounded-xl relative center-rel bg-green-900 w-10/12 mb-10">
            {displayPlants.map((plant) => (
              <FadeIn key={plant.id} delay={50*plant.id}>
                <Plant key={plant.id} plant={plant}/>
              </FadeIn>
            ))}
            <div className='rounded-xl relative center-rel bg-green-900 w-10/12 mb-10'></div>
        </div>
      </div>
    </FadeIn>
  )
}

export default Plants