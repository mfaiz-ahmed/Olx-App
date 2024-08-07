import { configureStore } from "@reduxjs/toolkit";
import themeSlice  from "./ThemeSlice";


const store = configureStore({
    reducer: themeSlice
})

export default store
