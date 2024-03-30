/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const  initialState :CounterType ={count: 0}

type CounterType={
    count:number
}
const counterSlice= createSlice({
    name :"counter",
    initialState,
   reducers:{
    increament(state){
        state.count= state.count+1
    },
    decreament (state){
        state.count=state.count-1
    },
    increamentByValue (state, action :PayloadAction<{value:number}>){
        state.count=state.count+action.payload.value
    }
   }
})

export const {increament, decreament, increamentByValue}= counterSlice.actions

export default counterSlice.reducer