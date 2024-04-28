import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useEffect } from 'react';
import { API_OPTIONS } from './utils/constants';

const MainContainer = () => {
    
    const movie=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movie)return ;

    
    const mainMovie =movie[0];
    // console.log(mainMovie.id);
    const {id} =mainMovie
   

  return (
    <div>
        <VideoTitle name={mainMovie.title} description ={mainMovie.overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer