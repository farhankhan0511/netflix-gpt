import React from 'react'
import { apioptions } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addSearchedResult } from '../utils/Gptslice'

const useSearchMovie = (moviestring) => {    
    const dispatch=useDispatch()
    const moviestringarr=moviestring?.split(",")

    const getmovies= async (arr)=>{
        let result=[]
      for(let movie of arr){
        movie.trim()
        movie.replaceAll(" ","%20")
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+"&include_adult=false&language=en-US&page=1" ,apioptions);
      const response=await data.json()
      result.push(response)
      const movies=await Promise.all(result)

      dispatch(addSearchedResult(movies))
    }
     
    }
    useEffect(()=>{
      if (!moviestringarr) return;
      getmovies(moviestringarr)
    },[])
    }
export default useSearchMovie