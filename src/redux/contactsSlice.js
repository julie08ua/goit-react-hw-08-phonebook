import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const handleFulfilledFetch = (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
    state.error = null;
};

const handleFulfilledAdd = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(contact => contact.id === payload.id);
    state.items.splice(index, 1)
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
    builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, handleFulfilledFetch)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, handleFulfilledAdd)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, handleFulfilledDelete)
        .addCase(deleteContact.rejected, handleRejected)
    },
});

export const contactsReducer = contactsSlice.reducer;