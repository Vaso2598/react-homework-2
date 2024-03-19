import React from 'react'
import Genres from '../components/Genres'
import {genres} from '../data/genres'

const Search = () => {
  return (
    <div className="flex flex-col bg-teal-950 text-slate-50 gap-8 p-3 rounded-md">
      <section>
        <label>
          <input type="search" placeholder="What do you want to play?" className="w-full bg-teal-900 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-indigo-500"></input>
        </label>
      </section>
      <section>
        <Genres data={genres}/>
      </section>
    </div>
  )
}

export default Search