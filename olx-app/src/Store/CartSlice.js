import { createSlice } from '@reduxjs/toolkit'

const initialState = {
cart : []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state , data) => {
        console.log(data.payload);
        state.cart.push(data.payload)
    },
  },
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer