import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.products.find(obj => obj.id === action.payload.id);

      if (findProduct) {
        findProduct.count++
      } else {
        state.products.push({...action.payload, count: 1})
      }
    },
    decrement: (state, action) => {
      const findProduct = state.products.find(obj => obj.id === action.payload);

      if (findProduct) {
        findProduct.count--
      } else {
        state.products.filter(product => product.id !== action.payload.id)
      }
    },
  },
})

export const { addToCart, decrement } = cartSlice.actions

export default cartSlice.reducer