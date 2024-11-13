import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { logo,useravatar } from '../utils/constant';

const Header = () => {
  const navigate=useNavigate()
  const dispatch =useDispatch()

  const handlesignout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
    });
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
    <div className='z-20 absolute  p-3 bg-gradient-to-b from-black w-full flex justify-between'>
        <img  className=" w-44" src={logo} alt="Logo"/>
         
     <div className='flex'>
     <img className='w-12 h-12 m-2' alt='user logo' src={useravatar}/>
     <button onClick={handlesignout} className='font-bold text-white'>Sign Out</button>
     </div>
      
    </div>
  )
}

export default Header