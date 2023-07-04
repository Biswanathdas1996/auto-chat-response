import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    getUsersFailure: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersFailure } = slice.actions;
export default slice.reducer;
