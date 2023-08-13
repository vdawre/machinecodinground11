import React from 'react'
import { useGlobalContext } from '../dataContext'

const Search = () => {
    const { query, setQuery } = useGlobalContext()

    console.log(query)

  return (
    <div className='searchbar flex grow'>
        <input type='text' className='search-input' onChange={(e) => setQuery(e.target.value)} placeholder='Search here...'></input>
    </div>
  )
}

export default Search