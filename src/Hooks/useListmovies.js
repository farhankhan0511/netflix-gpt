import { apioptions } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {addPopularmovies, addTopratedmovies, addupcomingmovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const useListmovies=()=>{
    
const dispatch=useDispatch()
const Popularmovies= async ()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/popular',apioptions);
  const response=await data.json()
  dispatch(addPopularmovies(response?.results))
  
}
const upcomingmovies= async ()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/upcoming',apioptions);
  const response=await data.json()
  dispatch(addupcomingmovies(response?.results))
  
}
const Topratedmovies= async ()=>{
  const data=await fetch('https://api.themoviedb.org/3/movie/top_rated',apioptions);
  const response=await data.json()
  dispatch(addTopratedmovies(response?.results))
 
}
useEffect(()=>{
  Popularmovies()
  upcomingmovies()
  Topratedmovies()
},[])
}
export default useListmovies;