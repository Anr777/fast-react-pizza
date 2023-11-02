import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/user/userSlice";
import { cartSlice } from "./features/cart";


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  }
});