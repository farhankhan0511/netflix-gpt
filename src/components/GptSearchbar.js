import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import opeanai from "../utils/openai"
import { addSearchedResult } from '../utils/Gptslice'

const GptSearchbar = () => {
    const intext=useRef(null)
    const dispatch=useDispatch()
    const slang=useSelector((store)=>store?.configLang?.preflang)
    
    const handleGptSearch=async()=>{
        console.log(intext.current.value)

        try {
          const gptquerey="Act as an Movie Recommendation System and suggest movie for the following query: "+ intext.current.value+". Only give 5 moveis and their name only seperated by commas in the manner ahead. Example Ahead: Don,Hera pheri,Dhoom,Padosan,Sholay"
          const chatCompletion=await opeanai.chat.completions.create({
              messages:[{role:'user',content:gptquerey}],
              model:'gpt-3.5-turbo',
          })
          console.log(chatCompletion.choices[0]?.messages.content )
          dispatch(addSearchedResult( chatCompletion.choices[0]?.messages.content))
  
          
        } catch (err) {
          alert("Apologies!!! The Api budget has ended ")
        }
    }
  return (
    <div className=' absolute top-[18%] flex justify-center z-10 w-full'>
        <form  onSubmit={(e)=>e.preventDefault()}  className=' w-[92%] md:w-1/2   bg-black grid grid-cols-12'>
        <input 
        ref={intext}
        className="p-4 m-4 rounded-md col-span-9" 
        type='text' 
        placeholder={lang[slang]?.placeholder}/>

        <button className='py-2 px-4 bg-red-800 rounded-lg col-span-3' onClick={handleGptSearch} >{lang[slang]?.search}</button>
        </form>
        
        
    </div>
  )
}

export default GptSearchbar