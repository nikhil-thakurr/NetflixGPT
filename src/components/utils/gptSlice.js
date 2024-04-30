import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        gptView:false
    },
    reducers:{
        showGptView:(state,action)=>{
            state.gptView= !state.gptView
        }
    }
})


export const {showGptView}=gptSlice.actions
export default gptSlice.reducer

