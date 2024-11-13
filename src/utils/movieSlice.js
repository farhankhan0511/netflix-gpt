import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowplayingmovies:null,
        trailerMovie:null,
    
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{
            state.nowplayingmovies=action.payload;
        },
        addTrailerMovie:(state,action)=>{
            state.trailerMovie=action.payload
        }
    },


})
export const {addnowplayingmovies,addTrailerMovie}=movieSlice.actions;
export default movieSlice.reducer