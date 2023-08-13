import React, { useState } from 'react'
import { useGlobalContext } from '../dataContext'
import MovieCard from './MovieCard'

const FilterSection = () => {
    const { db, query } = useGlobalContext()

    const [ selectedGenre, setSelectedGenre ] = useState("All")
    const [ selectedDate, setSelectedDate ] = useState("All")
    const [ selectedRating, setSelectedRating ] = useState("All")

    const handleGenre = (e) => {
        setSelectedGenre(e.target.value)
    }
    const handleDate = (e) => {
        setSelectedDate(e.target.value)
    }
    const handleRating = (e) => {
        setSelectedRating(e.target.value)
    }

    const filteredData = () => {
        var temp = []
        if(query.length === 0){
            temp = db
        } else {
            temp = db.filter((item) => item.title.toLowerCase().includes(query))
        }
        // filter by genre
        if(selectedGenre === "All"){
            return temp
        } else {
            temp = temp.filter((item) => item.genre.includes(selectedGenre))
        }
        // filter by date
        if(selectedDate === "All"){
            return temp
        } else {
            temp = temp.filter((item) => {
                const year = item.year
                var i
                if(year === 1994){
                    i=1990
                } else if(year === 1999){
                    i=1995
                } else{
                    i=2000
                }
                for( ; i<=year ; i++){
                    i = year
                    break
                }
                return item
            })
        }
        // filter by rating
        if(selectedRating === "All"){
            return temp 
        } else {
            temp = temp.filter((item) => item.rating > selectedRating )
        }
        return temp
    }

    const handleAddMovie = () => {
        
    }

  return (
    <div>
        <div className='filters-section flex row px-0 py-0 items-center justify-evenly my-1'>
            <p className='h3'>Movies</p>
            <div>
                <select onClick={handleGenre}>
                    <option value="All">All Genre</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Biography">Biography</option>
                    <option value="Crime">Crime</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                </select>
            </div>
            <div>
                <select onClick={handleDate}>
                    <option value="All">Release Date</option>
                    <option value="1994">1990-1994</option>
                    <option value="1999">1995-1999</option>
                    <option value="2004">2000-2004</option>
                </select>
            </div>
            <div>
                <select onClick={handleRating}>
                    <option value="All">Rating</option>
                    <option value="2">More than 2</option>
                    <option value="4">More than 4</option>
                    <option value="6">More than 6</option>
                    <option value="8">More than 8</option>
                </select>
            </div>
            <button className='btn' onClick={handleAddMovie}>Add Movie</button>
        </div>
        <div className='output flex row wrap gap items-center justify-center'>
            {
            filteredData().map((item, index) => {
                return (
                    <MovieCard data={item} key={index} />
                )
            })
            }
        </div>
    </div>
  )
}

export default FilterSection