import { createSlice } from '@reduxjs/toolkit'

const initialState = {
cart : [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state , data) => {
      state.cart.push(data.payload)
    },
  },
})

export const {addToCart} = CartSlice.actions

export default CartSlice.reducer