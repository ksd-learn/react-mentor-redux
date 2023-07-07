import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchOne, deletUser, addUser } from '../../redux/users/operations';

const sliceUsers = createSlice({
    name: 'users',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        curentUser: null,
        isAddUser: false
    },
    extraReducers: {
        
        [fetchUsers.pending](state, action) {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchUsers.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [fetchOne.pending](state, action) {
            state.isLoading = true;
        },
        [fetchOne.fulfilled](state, action) {
            state.isLoading = false;
            state.isAddUser = false;
            state.isAddUser = false;
            state.error = null;
            state.curentUser = action.payload;
        },
        [fetchOne.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [deletUser.pending](state, action) {
            state.isLoading = true;
        },
        [deletUser.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items=state.items.filter(item => item.id!==action.payload)
        },
        [deletUser.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        [addUser.pending](state, action) {
            state.isLoading = true;
        },
        [addUser.fulfilled](state, action) {
            state.isLoading = false;
            state.isAddUser = true;
            state.error = null;
            state.items.push(action.payload)
        },
        [addUser.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        }
})

export const sliceUsersReducer = sliceUsers.reducer;
