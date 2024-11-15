import { createSlice } from "@reduxjs/toolkit";


const Configslice=createSlice({
    name:"Config",
    initialState:{
        preflang:"en",
    },
    reducers:{
        togglelanguage:(state,action)=>{
            state.preflang=action.payload
        }
    }
})

export const {togglelanguage}=Configslice.actions
export default Configslice.reducer