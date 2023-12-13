import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../utils/productSlice'
import cartReducer from '../utils/cartSlice'

const store=configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer
    }
})
export default store