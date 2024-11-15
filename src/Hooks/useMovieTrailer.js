import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerMovie } from '../utils/movieSlice';
import { apioptions } from '../utils/constant';

const useMovieTrailer = (movie_id) => {
    const dispatch=useDispatch()
    const trailer=useSelector((store)=>store.movies?.trailerMovie)
   

    const getvideo=async(movie_id)=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`,apioptions);
  const response=await data.json()
  const trailers=response.results.filter((x)=>x.type=="Trailer")
  const trailerVideo=trailers.length?trailers[0]:response.results[0]
  
  
  dispatch(addTrailerMovie(trailerVideo))
    }
    useEffect(()=>{
        !trailer && getvideo(movie_id)
    },[])
}

export default useMovieTrailer