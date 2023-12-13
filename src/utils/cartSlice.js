import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.count+=1
        },
        remove:(state,action)=>{
            state.count-=1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
          },
    }
})

export const {add,remove,incrementByAmount}=cartSlice.actions

export default cartSlice.reducer