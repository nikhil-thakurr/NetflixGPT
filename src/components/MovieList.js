import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log(movies);
  return (
    movies&&
    <div className=' text-white py-4 px-6 '>
        <h1 className='text-xl md:text-2xl'>{title}</h1>
        <div className='flex overflow-x-scroll'>
    <div className='flex '>
       
       {movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path} />)} 
    </div>
    </div>
    </div>
  )
}

export default MovieList