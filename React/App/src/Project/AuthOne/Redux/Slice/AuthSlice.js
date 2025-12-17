import { createSlice } from "@reduxjs/toolkit";
import { getProfile, loginUser, registerUser } from "../Thunk/AuthThunk";

const token = localStorage.getItem("Token") || null;

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        console.info(action);
        state.error = action?.payload;
      })
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action?.payload?.token;
        localStorage.setItem("Token", action?.payload?.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload;
      })
      // PROFILE
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.user
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload;
      });
  },
});

export default authSlice.reducer;
