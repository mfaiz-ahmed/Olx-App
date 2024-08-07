import { configureStore } from "@reduxjs/toolkit";
import themeSlice  from "./ThemeSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CartSlice from "./CartSlice";


const persistConfig = {
    key: 'root',
    storage,
  }


const persistedReducer = persistReducer(persistConfig, CartSlice)


const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store)

export {store , persistor}
