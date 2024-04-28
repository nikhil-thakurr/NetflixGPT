import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState:{
        nowPlayingMovies :null,
        trailerId :null
    },
    reducers:{
        addnowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies =action.payload;
        },
        addTrailerId :(state,action)=>{
            state.trailerId =action.payload
        }
    },
});

export const {addnowPlayingMovies,addTrailerId} = moviesSlice.actions ;
export default moviesSlice.reducer ;