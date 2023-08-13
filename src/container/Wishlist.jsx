import React from 'react'
import { MovieCard, Navbar } from '../components'
import { useGlobalContext } from '../dataContext'

const Wishlist = () => {
  const { wishlistData } = useGlobalContext()

  return (
    <div>
        <Navbar />
        <div className='flex row wrap px-0 py-2'>
          {
            wishlistData.map((item, index) => {
              return <MovieCard data={item} key={index} />
            })
          }
        </div>
    </div>
  )
}

export default Wishlist