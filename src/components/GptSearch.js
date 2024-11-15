import React from 'react'
import { useSelector } from 'react-redux'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestion from './GptMovieSuggestion'
import {backimg} from '../utils/constant'

const GptSearch = () => {
   
  return (
    <>
        <div className='absolute'>
            <img src={backimg} alt="background-img"/>
        </div>
    <div>
        <GptSearchbar/>
        <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch