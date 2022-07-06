import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  preloader: true,
  products: [],
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload
      state.preloader = false
    },
  },
})

export const { getProducts } = catalogSlice.actions

export default catalogSlice.reducer