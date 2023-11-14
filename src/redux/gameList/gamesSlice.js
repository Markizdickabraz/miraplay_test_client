import { createSlice } from '@reduxjs/toolkit';
import { gamesList } from './operations';

 const gamesListSlice = createSlice({
  name: 'gamesList',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    selectedGenre: null, // Додайте поле для вибраного жанру
  },
  reducers: {
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(gamesList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(gamesList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      });
  },
 });

 export const gamesListReducer = gamesListSlice.reducer;
