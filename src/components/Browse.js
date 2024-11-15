import React from 'react'
import Header from './Header'
import useNowplaying from '../Hooks/useNowplaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowplaying();
  const showSearch=useSelector((store)=>store?.GptSearch?.ShowGptSearch)
  return (
    <div className='bg-gray-950'>
      <Header/>      
      {showSearch? (<GptSearch/>):(
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