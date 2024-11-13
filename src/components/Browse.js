import React from 'react'
import Header from './Header'
import useNowplaying from '../Hooks/useNowplaying'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowplaying();
  return (
    <div>
      <Header/>
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse