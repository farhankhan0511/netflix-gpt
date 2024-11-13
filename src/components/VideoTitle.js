import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video z-10 pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6  w-2/6 text-md '>{overview}</p>
        <div className='flex p-2'>
            <button className='bg-white text-black border border-solid border-black m-2 px-4 py-2 rounded-md text-md hover:bg-opacity-80 '>▶Play</button>
            <button className='bg-gray-600 text-white border border-solid border-black m-2 px-4 py-2 rounded-md text-md hover:bg-opacity-80'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle