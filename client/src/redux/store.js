import { configureStore } from '@reduxjs/toolkit';
import catalogReducer from './slices/catalogSlice';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    cart: cartReducer,
    filter: filterReducer
  },
})