import React, { useRef } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { logo,SUPPORTED_LANGUAGES,useravatar } from '../utils/constant';
import { clearSearchResult, toggleGptview } from '../utils/Gptslice';
import { togglelanguage } from '../utils/ConfigSlice';

const Header = () => {
  const navigate=useNavigate()
  const dispatch =useDispatch()
  const lang=useRef()
  const user=useSelector((store)=>store?.user)
  const showSearch=useSelector((store)=>store?.GptSearch?.ShowGptSearch)
 

  const handlesignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
    });
  }


const handlegptsearch=()=>{
  dispatch(toggleGptview())  
  if(!showSearch)dispatch(clearSearchResult())
  
}
const handlelang=()=>{
  dispatch(togglelanguage(lang.current.value))

}


  useEffect(()=>{
    const unsubscirbe=onAuthStateChanged(auth,(user)=>{
        if(user){
            const {uid,email,displayName}=user;
            dispatch(addUser({uid,email,displayName}));
            navigate("/browse");
        }
        else{
            dispatch(removeUser());
            navigate("/");
        }
    })
    return ()=> unsubscirbe;
},[])
  return (
    <div className='z-20 absolute  px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between'>
        <img  className=" w-44" src={logo} alt="Logo"/>
     
     {user && ( 
          
     <div className='flex'>

      {
      showSearch && <>
        <select ref={lang} onChange={handlelang} className='bg-purple-400 px-2 py-2 mt-2 h-3/4 cursor-pointer text-white rounded-lg'>
        {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.name} value={lang.identifier} >{lang.name}</option>)}
      </select>
        </>
      }

     <button onClick={handlegptsearch} className='py-2 px-4 mx-2 my-2   bg-purple-800 text-white rounded-lg'>{showSearch?"Home":"Gpt Search"}</button>


    <img className='w-12 h-12 m-2' alt='user logo' src={useravatar}/>
    <button onClick={handlesignout} className='font-bold text-white'>Sign Out</button>
    </div>
     )

     }
      
    </div>  
  )
}

export default Header