import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { getProducts } = catalogSlice.actions

export default catalogSlice.reducer