import { configureStore } from "@reduxjs/toolkit";
import whishlistSlice from "./slice/whishlistSlice";
import cartSlice from "./slice/cartSlice";

const store=configureStore({
    reducer:{
      wishlistReducer:whishlistSlice,
      cartReducer:cartSlice
    }
})
export default store