import { configureStore } from "@reduxjs/toolkit";
import { sliceUsersReducer } from "./users/sliceUsers";

export const store = configureStore({
    reducer: sliceUsersReducer,
});
