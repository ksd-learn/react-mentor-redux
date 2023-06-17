import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchOne } from '../../redux/users/operations';

const sliceUsers = createSlice({
    name: 'users',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        curentUser: null
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
            state.error = null;
            state.curentUser = action.payload;
        },
        [fetchOne.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },


        }
})

export const sliceUsersReducer = sliceUsers.reducer;
