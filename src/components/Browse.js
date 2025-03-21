import React from 'react'
import Header from './Header'
import useNowplaying from '../Hooks/useNowplaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowplaying();
  let show=useSelector((store)=>store?.GptSearch?.showGptSearch)
  return (
    <div className='bg-gray-950'>
      <Header/>      
      {show? (<GptSearch/>):(
      <>
         <MainContainer/>
         <SecondaryContainer/>
      </>
      )

      }
    </div>
  )
}

export default Browse