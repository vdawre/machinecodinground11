import React from 'react'
import "../styles.css"
import { useNavigate } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
    const navigate = useNavigate()

  return (
    <div className='navbar px-0 py-0 items-center'>
        <p className='h2 flex grow'>IMDB</p>
        <Search />
        <div className='flex row gap'>
            <div onClick={() => navigate("/")}>Movies</div>
            <div onClick={() => navigate("/wishlist")}>Wishlist</div>
            <div onClick={() => navigate("/starredMovies")}>StarredMovies</div>
        </div>
    </div>
  )
}

export default Navbar