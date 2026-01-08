import { createSlice } from "@reduxjs/toolkit";
import { RegisterUser } from "../Thunk/AuthThunk";

const initialState = {
  user: null,
  loading: false,
  error: null,
  type: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = false;
        state.type = action.type
        // state.user = action?.payload?.msg;
        console.info(action.type)
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.response?.data?.msg;
      });
  },
});

export default authSlice.reducer;
