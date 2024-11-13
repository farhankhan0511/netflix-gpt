import React from 'react'
import { MOVIEPOSTER } from '../utils/constant'

const MovieCard = ({movie}) => {
  return (
    <div className='w-48 hover:scale-105 mx-2'>
        <img className="w-full h-30" src={MOVIEPOSTER +movie?.poster_path } alt={movie?.orignal_title}/>
        {/* <h1>{movie?.orignal_title}</h1> */}

    </div>
  )
}

export default MovieCard