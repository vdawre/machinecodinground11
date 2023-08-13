import React from 'react'
import { useGlobalContext } from '../dataContext'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({data}) => {
  const navigate = useNavigate()

  const { db, wishlistData, setWishlistData, starredData, setStarredData } = useGlobalContext()
  
  const isPresentInStarred = starredData.findIndex((item) => item.id === data.id)
  const isPresentInWishlist = wishlistData.findIndex((item) => item.id === data.id)

  const addToStarred = (e) => {
    e.stopPropagation()
    if(isPresentInStarred === -1){
      const foundMovie = db.find((item) => item.id === Number(e.target.value))
      setStarredData([...starredData, foundMovie])
    }
  }
  const removeFromStarred = (e) => {
    e.stopPropagation()
    const foundMovie = db.find((item) => item.id === Number(e.target.value))
    setStarredData(starredData.filter((item) => item.id !== foundMovie.id ))
  }
  const addToWishlist = (e) => {
    e.stopPropagation()
    if(isPresentInWishlist === -1){
      const foundMovie = db.find((item) => item.id === Number(e.target.value))
      setWishlistData([...wishlistData, foundMovie])
    }
  }
  const removeFromWishlist = (e) => {
    e.stopPropagation()
    const foundMovie = db.find((item) => item.id === Number(e.target.value))
    setWishlistData(wishlistData.filter((item) => item.id !== foundMovie.id ))
  }

  return (
    <div className='movie-card px-0 py-2'>
        <img src={data.imageURL} alt='Movie' className='card-img' onClick={() => navigate(`/${data.title}`)} />
        <p className='h2'>{data.title}</p>
        <p>{data.summary}</p>
        <div className='card-btn-group flex gap'>
            <button className='btn' value={data.id} onClick={ isPresentInStarred === -1 ? addToStarred : removeFromStarred }>{isPresentInStarred === -1 ? "Star" : "Unstar"}</button>
            <button className='btn' value={data.id} onClick={ isPresentInWishlist === -1 ? addToWishlist : removeFromWishlist } >{isPresentInWishlist === -1 ? "Add to Wishlist" : "Remove from Wishlist"}</button>
        </div>
    </div>
  )
}

export default MovieCard