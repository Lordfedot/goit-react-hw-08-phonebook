import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../operation';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default contactSlice.reducer;
