import React from 'react'

const SingleMovieCard = ({data}) => {
  return (
    <div className='single-movie-card flex row px-2 py-2 gap my-2'>
        <img src={data.imageURL} alt='movie' className='single-movie-image' />
        <div className='card-description flex column gap py-0'>
            <h2>{data.title}</h2>
            <p>{data.summary}</p>
            <p>Year: {data.year}</p>
            <p>Genre: {data.genre.map((item) => item + ", ")}</p>
            <p>{data.rating}</p>
            <p>{data.director}</p>
            <p>{data.writer}</p>
            <p>{data.cast.map((item) => item + ", ")}</p>
            <div className='flex row gap'>
                <button className='btn'>Star</button>
                <button className='btn'>Add to Wishlist</button>
            </div>
        </div>
    </div>
  )
}

export default SingleMovieCard