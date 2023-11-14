import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const gamesList = createAsyncThunk(
  'gamesList',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("https://api.miraplay.cloud/games/by_page",credentials);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);