import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
  refreshUser,
  resendEmail,
  updateUser,
} from './operations';

const INIT_STATE = {
  name: null,
  email: null,
  id: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: INIT_STATE,
    token: null,
    isLoggedIn: false,
    isRefreshing: true,
    resendEmail: null,
  },
  reducers: {
    setResendEmail: (state, action) => {
      state.resendEmail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.token = payload.token;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(resendEmail.fulfilled, (state, { payload }) => {
        state.resendEmail = payload.resendEmail;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.data.result };
      })
      .addCase(logOut.pending, (state) => {
        state.user = INIT_STATE;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const { setResendEmail } = authSlice.actions;

export const authReducer = authSlice.reducer;
