import { createSlice } from '@reduxjs/toolkit';
import { popularGames } from './operations';

const popularGamesSlice = createSlice({
    name: 'games',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(popularGames.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(popularGames.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload;
            });
    },
});

export const gamesReducer = popularGamesSlice.reducer;
