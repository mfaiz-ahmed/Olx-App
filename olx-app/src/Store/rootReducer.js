import { combineReducers } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ThemeSlice from "./ThemeSlice";

const rootReducer = combineReducers({ 
    themeStore: ThemeSlice,
    cartStore: CartSlice });

export default rootReducer