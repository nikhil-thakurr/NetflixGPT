import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_IMG } from './utils/constants'

const GptSearch = () => {
  return (
    <div >
         <div className=' fixed -z-10 '>
        <img
          className='h-screen object-cover'
          src={NETFLIX_IMG}
          alt="Netflix-Image"
        />
      </div>
      <div className='pt-[40%] md:pt-0'>
       <GptSearchBar/>
       <GptMovieSuggestions/>
       </div>
    </div>
  )
}

export default GptSearch