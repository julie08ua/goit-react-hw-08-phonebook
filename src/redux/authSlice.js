import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleFulfilled = ({user,token,isLoggedIn}, {payload}) => {
    user = payload.user;
    token = payload.token;
    isLoggedIn = true;
};
    
const handleFulfilledLogOut = ({user,token,isLoggedIn}) => {
    user = { name: null, email: null };
    token = null;
    isLoggedIn = false;
};

const handlePendingRefreshUser = ({isRefreshing}) => {
    isRefreshing = true;
};

const handleFulfilledRefreshUser = ({user, isLoggedIn, isRefreshing}, {payload}) => {
    user = payload;
    isLoggedIn = true;
    isRefreshing = false;
};

const handleRejectedRefreshUser = ({isRefreshing}) => {
    isRefreshing = false;
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
