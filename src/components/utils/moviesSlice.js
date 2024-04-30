import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState:{
        nowPlayingMovies :null,
        upcomingMovies:null,
        trailerId :null
    },
    reducers:{
        addnowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies =action.payload;
        },
        addUpcomingMovies :(state,action)=>{
            state.upcomingMovies =action.payload;
        },
        addTrailerId :(state,action)=>{
            state.trailerId =action.payload
        }
    },
});

export const {addnowPlayingMovies,addTrailerId,addUpcomingMovies} = moviesSlice.actions ;
export default moviesSlice.reducer ;