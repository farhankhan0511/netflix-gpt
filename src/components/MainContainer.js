import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies=useSelector(store=> store.movies?.nowplayingmovies)
    if (!movies) return;//early return 
   const  mainmovie = movies[0];
   

   const {id,original_title,overview}=mainmovie;
   
  return (
    <div className=''>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movie_id={id}/>
        

    </div>
    
  )
}

export default MainContainer