import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import contactSlice from './slices/contactSlice';



export const store = configureStore({
  reducer: {
    contacts: contactSlice,
    filter: filterSlice,
  },
});
