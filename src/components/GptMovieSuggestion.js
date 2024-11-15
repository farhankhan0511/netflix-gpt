import React from 'react'
import { useSelector } from 'react-redux'
import useSearchMovie from '../Hooks/useSearchMovie'
import MovieCard from "./MovieCard"
const GptMovieSuggestion = () => {
    const result=useSelector((store)=>store?.GptSearch?.Searched)
    
    useSearchMovie(result)
    const movies=useSelector((store)=>store?.GptSearch?.Searched)

            
  return (
    <div className='flex m-4 p-4 bg-black'>
        {
            movies?.map((movie)=>(
                <MovieCard  key={movie?.id} movie={movie} />
            )
                
            )
        }
    </div>
  )
}

export default GptMovieSuggestion