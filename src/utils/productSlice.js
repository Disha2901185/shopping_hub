import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cardCount:[],
}

const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cardCount.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.cardCount=state.cardCount.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {addToCart,removeFromCart}=productSlice.actions

export default productSlice.reducer