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

const handleRejected = ({ isLoading, error }, { payload }) => {
    isLoading = false;
    error = payload;
};

const handleFulfilledFetch = ({ items, isLoading, error }, { payload }) => {
    items = payload;
    isLoading = false;
    error = null;
};

const handleFulfilledAdd = ({ items, isLoading, error }, { payload }) => {
    isLoading = false;
    error = null;
    items.push(payload);
};

const handleFulfilledDelete = ({ items, isLoading, error }, { payload }) => {
    isLoading = false;
    error = null;
    const index = items.findIndex(contact => contact.id === payload.id);
    items.splice(index, 1)
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