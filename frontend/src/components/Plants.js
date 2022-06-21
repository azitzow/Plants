import React, {useState} from 'react'
import Plant from './Plant'

function Plants({displayPlants, setPlantsSearch}) {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlantsSearch(search)
  }

  return (
    <div className='Plants h-full'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="ml-3 bg-white rounded-md w-20 border-gray-300 border-2 hover:bg-slate-100 active:bg-slate-300" type='submit'>Button</button>
      </form>
      <div className="flex flex-wrap justify-center rounded-xl relative center-rel bg-slate-600 w-8/12 h-5/6 mt-10 overflow-auto">
        {displayPlants.map((plant) => (
          <Plant key={plant.id} plant={plant}/>
        ))}
      </div>
    </div>
  )
}

export default Plants