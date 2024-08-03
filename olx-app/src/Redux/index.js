import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";

const store = configureStore({
    reducer: ThemeSlice
})


export default store