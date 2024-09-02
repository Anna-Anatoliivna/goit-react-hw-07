import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const apiGetAllContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        'https://66d560c3f5859a704265d358.mockapi.io/api/v1/contact',
      );
      // console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
