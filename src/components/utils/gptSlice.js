import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        gptView:false,
        movies:null,
        movieDetails:null
    },
    reducers:{
        showGptView:(state,action)=>{
            state.gptView= !state.gptView
        },
        addGPTMovies:(state,action)=>{
            const {searchMovies,detailsMovies}=action.payload
            state.movies=searchMovies
            state.movieDetails=detailsMovies
        }
    }
})


export const {showGptView,addGPTMovies}=gptSlice.actions
export default gptSlice.reducer

