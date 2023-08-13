import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar, SingleMovieCard } from '../components'
import { useGlobalContext } from '../dataContext'

const MoviePage = () => {
    const { movieName } = useParams()

    const { db } = useGlobalContext()

    const foundMovie = db.find((item) => item.title === movieName )

    console.log(foundMovie)

  return (
    <div>
        <Navbar />
        <div className='flex row justify-center'>
          <SingleMovieCard data={foundMovie} />
        </div>
    </div>
  )
}

export default MoviePage