import { createSlice } from '@reduxjs/toolkit';
import { gamesList } from './operations';

const GamesListSlice = createSlice({
    name: 'gamesList',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
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

export const gamesReducer = GamesListSlice.reducer;