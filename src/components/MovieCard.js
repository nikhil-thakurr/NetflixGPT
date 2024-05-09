import React from 'react'
import { IMG_CDN_URL } from './utils/constants'

const MovieCard = ({posterPath}) => {
    // console.log(posterPath);
    if(!posterPath)return null;
  return (
    <div className=' md:p-3 md:w-44 p-1 w-32'>
        <img src={IMG_CDN_URL + posterPath} alt="Image" />
    </div>
  )
}

export default MovieCard