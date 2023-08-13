import React from 'react'
import { MovieCard, Navbar } from '../components'
import { useGlobalContext } from '../dataContext'

const StarredMovies = () => {
  const { starredData } = useGlobalContext()

  return (
    <div>
        <Navbar />
        <div className='flex row wrap px-0 py-2'>
          {
            starredData.map((item, index) => {
              return <MovieCard data={item} key={index} />
            })
          }
        </div>
    </div>
  )
}

export default StarredMovies