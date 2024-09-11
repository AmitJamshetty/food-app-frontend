import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer : { // even the store has it'sown reducer
        cart : cartReducer,
        // user : userReducer
    }
})

export default appStore