import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movies.nowPlayingMovies)
    const upcomingMovies =useSelector(store=>store.movies.upcomingMovies)
  return (
    movies && 
    <div className='bg-black '>
        <div className='-mt-60  relative z-index-43 '>
        <MovieList title={"Now pLaying Movies"} movies={movies} />
        <MovieList title={"upcoming"} movies={upcomingMovies} />
        <MovieList title={"Now pLaying Movies"} movies={movies} />
        <MovieList title={"Now pLaying Movies"} movies={movies} />
        <MovieList title={"Now pLaying Movies"} movies={movies} />
        <MovieList title={"Now pLaying Movies"} movies={movies} />
        </div>
    </div>
  )
}

export default SecondaryContainer