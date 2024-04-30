import React from 'react'
import Header from './Header'
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcoming from './hooks/useUpcoming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
 const show = useSelector(store=>store.gpt.gptView);
  useNowPlayingMovies();
  useUpcoming();

  return (
    <div>
        <Header/>
        {(show)? <GptSearch/> : 
        <>
         <MainContainer/>
        <SecondaryContainer/>
        </>}
        
       
    </div>
  )
}

export default Browse