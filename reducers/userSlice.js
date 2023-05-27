import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    loading: false,
    message: null,
    error: null,
    isLoggedIn: false,
  },
  reducers: {
    getUserStart: (state) => {
      state.loading = true;
      state.isLoggedIn = false;
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.isLoggedIn = true;
    },
    getUserFailure: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});

export const {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  logoutFail,
  logoutRequest,
  logoutSuccess,
  clearErrors,
  clearMessage,
} = userSlice.actions;

export default userSlice.reducer;
