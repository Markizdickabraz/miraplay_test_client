import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const popularGames = createAsyncThunk(
  "games",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://api.miraplay.cloud/games");
        return response.data;
    } catch (e) {
        toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
