import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleFulfilled = (state, {payload}) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
};
    
const handleFulfilledLogOut = (state) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
};

const handlePendingRefreshUser = (state) => {
    state.isRefreshing = true;
};

const handleFulfilledRefreshUser = (state, {payload}) => {
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
};

const handleRejectedRefreshUser = (state) => {
    state.isRefreshing = false;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, handleFulfilled)
            .addCase(logIn.fulfilled, handleFulfilled)
            .addCase(logOut.fulfilled, handleFulfilledLogOut)
            .addCase(refreshUser.pending, handlePendingRefreshUser)
            .addCase(refreshUser.fulfilled, handleFulfilledRefreshUser)
            .addCase(refreshUser.rejected, handleRejectedRefreshUser)
    },
});

export const authReducer = authSlice.reducer;
