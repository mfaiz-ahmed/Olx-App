import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CartSlice from "./CartSlice";
import ThemeSlice from './ThemeSlice'

const persistConfig = {
    key: 'root',
    storage,
  }


const persistedReducer = persistReducer(persistConfig , CartSlice)


const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store)

export {store , persistor}