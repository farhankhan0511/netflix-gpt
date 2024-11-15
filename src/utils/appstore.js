import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import GptSearchreducer from "./Gptslice"
import PrefLangreducer from "./ConfigSlice"
const appstore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        GptSearch:GptSearchreducer,
        configLang:PrefLangreducer,
    }
})

export default appstore

