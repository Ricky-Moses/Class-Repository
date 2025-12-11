import { createAsyncThunk } from "@reduxjs/toolkit";
import apiConfig from "../../API/apiConfig";

// Register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, thunkAPI) => {
    try {
      const res = await apiConfig.post("/register", formData);
      console.info(res);
      return res.data;
    } catch (err) {
      console.info(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
