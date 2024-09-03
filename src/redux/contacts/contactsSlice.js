import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { apiAddContacts, apiDeleteContacts, apiGetAllContacts } from '../contactsOps';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    // addContact: (state, action) => {
    //   state.items.push({ ...action.payload, id: nanoid() });
    // },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter(
    //     contact => contact.id !== action.payload,
    //   );
    // },
  },
  extraReducers: builder =>
    builder
      .addCase(apiGetAllContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiGetAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(apiGetAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiDeleteContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiDeleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id,
        );
      })
      .addCase(apiDeleteContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(apiAddContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(apiAddContacts.fulfilled, (state, action) => {
        state.loading = false;
       state.items.push(action.payload);
      })
      .addCase(apiAddContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const selectContacts = state => state.contacts.items;

export const contactsReducer = contactsSlice.reducer;
export const { addContact } = contactsSlice.actions;
