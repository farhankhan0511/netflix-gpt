import React from 'react'
import { useSelector } from 'react-redux'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { backimg } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
      <div className="absolute">
        <img className="object-cover h-screen md:h-auto  fixed md:bg-fixed" src={backimg} alt="background-img" />
      </div>
      <div className="flex flex-col my-auto space-y-4">
        {/* Space between components using space-y-4 or any other value for spacing */}
        <GptSearchbar />
        <GptMovieSuggestion />
      </div>
    </>
  )
}

export default GptSearch
