import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://648d9a2d2de8d0ea11e8060b.mockapi.io/';

export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/users");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchOne = createAsyncThunk(
    'users/fetchOne',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/users/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
