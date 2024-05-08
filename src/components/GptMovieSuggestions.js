import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'


const GptMovieSuggestions = () => {

  const {movies,movieDetails} =useSelector(store=>store.gpt);
  if(!movies)return null;
  return (
    <div className='p-4 my-4 bg-black opacity-85'>
      {movies.map((movie,index)=> <MovieList key={movie} title={movies[index]} movies={movieDetails[index]}/>)}
     
    </div>
  )
}

export default GptMovieSuggestions