import { apioptions } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addnowplayingmovies } from '../utils/movieSlice'

const useNowplaying=()=>{
    
const dispatch=useDispatch()
const nowplayingmovies= async ()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/now_playing',apioptions);
  const response=await data.json()
  dispatch(addnowplayingmovies(response?.results))
 
}
useEffect(()=>{
  nowplayingmovies()
},[])
}
export default useNowplaying;