import React from 'react'
import { IMG_CDN_URL } from './utils/constants'

const MovieCard = ({posterPath}) => {
    // console.log(posterPath);
  return (
    <div className='p-3 w-44'>
        <img src={IMG_CDN_URL + posterPath} alt="Image" />
    </div>
  )
}

export default MovieCard